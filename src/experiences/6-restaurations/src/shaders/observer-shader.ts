import { Transform, Program, Mesh, Triangle } from 'ogl';

export function ObserverShader(gl, texture) {
    const scene = new Transform();

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
        vertex: /* glsl */`
        attribute vec3 position;
        attribute vec2 uv;

        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.);
        }`,
        fragment: /* glsl */`
        precision highp float;

        varying vec2 vUv;

        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform float uZoom;
        uniform float uLensRadius;
        uniform float uAspect;

        vec2 lens_distortion(vec2 r, float alpha) {
            return r * (1.0 - alpha * dot(r, r));
        }

        vec2 zoom_point(vec2 uv, vec2 point, float zoom) {
            return (uv - point) / zoom + point;
        }

        void main() {
            vec2 uv = vUv;
            float lens_radius = uLensRadius;

            vec2 adjustedUV = vec2(uv.x * uAspect, uv.y);
            vec2 adjustedMouse = vec2(uMouse.x * uAspect, uMouse.y);

            float mouse_dist = distance(adjustedUV, adjustedMouse);
            vec4 texColor;

            if (mouse_dist < lens_radius) {
                vec2 distortion = lens_distortion(adjustedUV - adjustedMouse, 2.5);
                vec2 zoomed = zoom_point(adjustedUV + distortion, adjustedMouse, uZoom);
                vec2 zoomedUV = vec2(zoomed.x / uAspect, zoomed.y); // Undo aspect adjustment
                texColor = texture2D(uTexture, zoomedUV);
            } else {
                texColor = texture2D(uTexture, uv);
            }

            vec4 brownTint = vec4(0.6, 0.4, 0.2, 1.0); // Brown color
            gl_FragColor = mix(texColor, brownTint, 0.3); // Blend with 10% brown tint
            //gl_FragColor = vec4(texColor.rgb, texColor.a);
        }`,
        uniforms: {
            uTexture: { value: texture },
            uMouse: { value: [-1.0, -1.0] }, // Default mouse position in UV
            uZoom: { value: 3.0 }, // Zoom factor
            uLensRadius: { value: 0.2 }, // Lens radius
            uAspect: { value: gl.canvas.width / gl.canvas.height },
        },
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    const updateMousePosition = (clientX, clientY) => {
        const rect = gl.canvas.getBoundingClientRect();
        const canvasX = (clientX - rect.left) / rect.width;
        const canvasY = (clientY - rect.top) / rect.height;

        // Normalize to UV coordinates
        program.uniforms.uMouse.value = [canvasX, 1.0 - canvasY]; // Flip Y for UV
    };

   /*  // Mouse interaction
    gl.canvas.addEventListener('mousemove', (event) => {
        updateMousePosition(event.clientX, event.clientY);
    }); */

    // Touch interaction
    window.addEventListener('touchmove', (event) => {
        const clientX = event.changedTouches[0].clientX;
        const clientY = event.changedTouches[0].clientY;
        updateMousePosition(clientX, clientY);
    });


    return scene;
}