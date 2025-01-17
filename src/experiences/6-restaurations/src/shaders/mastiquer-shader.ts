import { Transform, Program, Mesh, Triangle } from 'ogl';

export function MastiquerShader(gl, texture) {
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

        void main() {
            vec2 uv = vUv;

            vec4 texColor = texture2D(uTexture, uv);

            gl_FragColor = texColor; // Blend with 10% brown tint
            //gl_FragColor = vec4(texColor.rgb, texColor.a);
        }`,
        uniforms: {
            uTexture: { value: texture },
        },
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    /* const updateMousePosition = (clientX, clientY) => {
        const rect = gl.canvas.getBoundingClientRect();
        const canvasX = (clientX - rect.left) / rect.width;
        const canvasY = (clientY - rect.top) / rect.height;

        // Normalize to UV coordinates
        program.uniforms.uMouse.value = [canvasX, 1.0 - canvasY]; // Flip Y for UV
    };

   /*  // Mouse interaction
    gl.canvas.addEventListener('mousemove', (event) => {
        updateMousePosition(event.clientX, event.clientY);
    }); 

    // Touch interaction
    window.addEventListener('touchmove', (event) => {
        const clientX = event.changedTouches[0].clientX;
        const clientY = event.changedTouches[0].clientY;
        updateMousePosition(clientX, clientY);
    }); */


    return scene;
}