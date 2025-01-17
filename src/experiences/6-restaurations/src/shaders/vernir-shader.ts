import { Transform, Program, Mesh, Triangle } from 'ogl';

let clean = 1.0

export function VernirShader(gl, texture, sdTexture) {
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
        uniform sampler2D uSdTexture;
        uniform float uClean;
        uniform float uAspect;

        void main() {
            vec2 uv = vUv;

            vec4 texColor = texture2D(uTexture, uv);

            vec4 normalPainting = texture2D(uSdTexture, uv);
            gl_FragColor = mix(normalPainting, texColor, uClean);
        }`,
        uniforms: {
            uTexture: { value: texture },
            uSdTexture: {value: sdTexture },
            uClean: { value: 1.0 },
            uAspect: { value: gl.canvas.width / gl.canvas.height },
        },
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    const handleCleanPaint = (event) => {
        if (event.detail?.scene === 'clean') {
            clean -= 0.083;
            clean = Math.max(0, clean);
            program.uniforms.uClean.value = clean;
            console.log("clean", clean);
        }
    };

    // Remove any existing listener and add a new one
    document.removeEventListener('cleanPaint', handleCleanPaint);
    document.addEventListener('cleanPaint', handleCleanPaint);
    

    /* const updateMousePosition = (clientX, clientY) => {
        const rect = gl.canvas.getBoundingClientRect();

        if (
            clientX >= rect.left &&
            clientX <= rect.right &&
            clientY >= rect.top &&
            clientY <= rect.bottom &&
            clean >= 0
        ) {
            clean -= 0.0002

            // Normalize to UV coordinates
            program.uniforms.uClean.value = clean; // Flip Y for UV
            console.log("clean", clean)
        }
    }; */

   /*  // Mouse interaction
    gl.canvas.addEventListener('mousemove', (event) => {
        updateMousePosition(event.clientX, event.clientY);
    }); */

    // Touch interaction
    /* window.addEventListener('touchmove', (event) => {
        const clientX = event.changedTouches[0].clientX;
        const clientY = event.changedTouches[0].clientY;
        updateMousePosition(clientX, clientY);
    });
 */

    return scene;
}