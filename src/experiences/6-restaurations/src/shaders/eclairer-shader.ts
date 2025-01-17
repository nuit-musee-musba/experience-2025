import { Transform, Program, Mesh, Triangle } from 'ogl';

export function EclairerShader(gl, baseTexture, uvTexture) {
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

        uniform sampler2D uBaseTexture;       // Base texture
        uniform sampler2D uUVTexture;        // UV/Ultraviolet texture
        uniform vec2 uMouse;                 // Mouse position in UV coordinates
        uniform float uLightRadius;          // Radius for blending
        uniform float uAspect;               // Aspect ratio for non-square textures

        void main() {
            vec2 uv = vUv;
            vec2 adjustedUV = vec2(uv.x * uAspect, uv.y);
            vec2 adjustedMouse = vec2(uMouse.x * uAspect, uMouse.y);

            // Calculate distance from the mouse to the current UV coordinates
            float dist = distance(adjustedUV, adjustedMouse);

            // Adjust blendFactor for shinier effect
            float blendFactor = pow(smoothstep(uLightRadius, 0.0, dist), 1.5);

            // Sample both textures
            vec4 baseColor = texture2D(uBaseTexture, uv);
            vec4 uvColor = texture2D(uUVTexture, uv);

            // Add a purple tint to the UV color
            uvColor.rgb += vec3(1.0, 0.0, 2.0) * blendFactor; // Add purple with intensity based on blendFactor

            vec4 brownTint = vec4(0.6, 0.4, 0.2, 1.0);

            baseColor = mix(baseColor, brownTint, 0.3);

            // Blend the two textures based on the blendFactor
            vec4 finalColor = mix(baseColor, uvColor, blendFactor);

            gl_FragColor = vec4(finalColor.rgb, finalColor.a);

            //vec4 brownTint = vec4(0.6, 0.4, 0.2, 1.0); // Brown color
            //gl_FragColor = mix(finalColor, brownTint, 0.8);
        }`,
        uniforms: {
            uBaseTexture: { value: baseTexture },
            uUVTexture: { value: uvTexture }, // Pass the ultraviolet texture
            uMouse: { value: [-1.0, -1.0] },  // Default mouse position in UV
            uLightRadius: { value: 0.6 },      // Lens radius
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

    // Touch interaction
    window.addEventListener('touchmove', (event) => {
        const clientX = event.changedTouches[0].clientX;
        const clientY = event.changedTouches[0].clientY;
        updateMousePosition(clientX, clientY);
    });

    return scene;
}
