import { Renderer, Camera, Transform, Program, Mesh, Plane, Texture, Triangle } from 'ogl';

/* declare global {
    interface DocumentEventMap {
        'switchSceneEvent': CustomEvent;
    }
} */

let currentScene; // Holds the current scene

export function setupCanvas(element) {
    // Initialize Renderer and Camera as before
    const canvas = element;
    const renderer = new Renderer({ canvas, antialias: true, alpha: true  });
    const gl = renderer.gl;
    document.querySelector('#app-exp-6')?.appendChild(gl.canvas) ?? document.body.appendChild(gl.canvas);

    gl.clearColor(0.0, 0.0, 0.0, 0.0);


    /* const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 3); */

    const paintTexture = new Image();
    paintTexture.src = './src/assets/textures/endommagé.jpg';

    const texture = new Texture(gl, {
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
    });

    paintTexture.onload = () => {
        texture.image = paintTexture;

        console.log("texture loaded");
        currentScene = createScene1(gl, texture); 
    }

    //const controls = new Orbit(camera);

    const cssWidth = ((80 / 100) * window.innerHeight) * 0.75; 
    const cssHeight = (80 / 100) * window.innerHeight;

    // Resize handler
    function resize() {
        renderer.setSize(cssWidth, cssHeight);
        //camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    window.addEventListener('resize', resize);
    resize();

    // Initial Scene Setup
    //currentScene = createScene1(gl, texture); // Create an initial scene

    /* setTimeout(() => {
        switchScene(createScene2(gl));
    }, 2000);
 */

    document.addEventListener('switchSceneEvent', (event: CustomEvent) => {
        console.log("in the custom event youpiiii")
        if (event.detail?.scene === 'scene2') {
            switchScene(createScene1(gl, texture));
            //transitionScene(camera, createScene2(gl));
        }
    });

    // Render Loop
    requestAnimationFrame(function update() {
        requestAnimationFrame(update);
        //controls.update();
        if (currentScene) {
            //console.log("my scene", currentScene);
            renderer.render({ scene: currentScene });
        }
    });
}

/* function createScene1(gl, texture) {
    const scene = new Transform();

    const rectangle = new Plane(gl, { width: 1.5, height: 2 });

    const program = new Program(gl, {
        vertex: `
        attribute vec3 position;
        attribute vec2 uv;

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
        fragment: `
        precision highp float;

        varying vec2 vUv;

        uniform sampler2D uTexture;
        uniform float uOpacity;

        void main() {
            vec4 texColor = texture2D(uTexture, vUv);
            gl_FragColor = vec4(texColor.rgb, texColor.a * uOpacity);
        }`,
        uniforms: {
            uTexture: { value: texture },
            uOpacity: { value: 1.0 },
        },
    });

    const mesh = new Mesh(gl, { geometry: rectangle, program });
    mesh.setParent(scene);

    return scene;
} */

/* function createScene1(gl, texture) {
    const scene = new Transform();

    const planeWidth = 1.5; // Plane width in 3D space
    const planeHeight = 2.0; // Plane height in 3D space
    const canvasAspect = gl.canvas.width / gl.canvas.height;

    const rectangle = new Plane(gl, { width: planeWidth, height: planeHeight });

    const program = new Program(gl, {
        vertex: `
        attribute vec3 position;
        attribute vec2 uv;

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
        fragment: `
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

            gl_FragColor = vec4(texColor.rgb, texColor.a);
        }`,
        uniforms: {
            uTexture: { value: texture },
            uMouse: { value: [0.5, 0.5] }, // Default mouse position in UV
            uZoom: { value: 3.0 }, // Zoom factor
            uLensRadius: { value: 0.2 }, // Lens radius
            uAspect: { value: planeWidth / planeHeight },
        },
    });

    const mesh = new Mesh(gl, { geometry: rectangle, program });
    mesh.setParent(scene);

    // Mouse interaction
    window.addEventListener('mousemove', (event) => {
        const rect = gl.canvas.getBoundingClientRect();
        const canvasX = (event.clientX - rect.left) / rect.width;
        const canvasY = (event.clientY - rect.top) / rect.height;

        // Map canvas coordinates to plane UV space
        const planeX = (canvasX - 0.5) * canvasAspect * 2.0; // Convert to centered space
        const planeY = -(canvasY - 0.5) * 2.0; // Flip Y for UV

        // Check if the mouse is within the plane bounds
        if (
            planeX >= -planeWidth / 2 &&
            planeX <= planeWidth / 2 &&
            planeY >= -planeHeight / 2 &&
            planeY <= planeHeight / 2
        ) {
            // Normalize to UV space
            const uvX = (planeX + planeWidth / 2) / planeWidth;
            const uvY = (planeY + planeHeight / 2) / planeHeight;

            program.uniforms.uMouse.value = [uvX, uvY];
        }
    });

    return scene;
} */

function createScene1(gl, texture) {
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

            gl_FragColor = vec4(texColor.rgb, texColor.a);
        }`,
        uniforms: {
            uTexture: { value: texture },
            uMouse: { value: [0.0, 0.0] }, // Default mouse position in UV
            uZoom: { value: 3.0 }, // Zoom factor
            uLensRadius: { value: 0.2 }, // Lens radius
            uAspect: { value: gl.canvas.width / gl.canvas.height },
        },
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    // Mouse interaction
    window.addEventListener('mousemove', (event) => {
        const rect = gl.canvas.getBoundingClientRect();
        const canvasX = (event.clientX - rect.left) / rect.width;
        const canvasY = (event.clientY - rect.top) / rect.height;

        // Normalize to UV coordinates
        program.uniforms.uMouse.value = [canvasX, 1.0 - canvasY]; // Flip Y for UV
    });


    return scene;
}


function createScene2(gl) {
    // Create the first scene with a blue shader
    const scene = new Transform();

    const rectangle = new Plane(gl, { width: 1.5, height: 2 });
    const program = new Program(gl, {
        vertex: `
        attribute vec3 position;
        attribute vec2 uv;

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
        fragment: `
        precision highp float;

        uniform float uOpacity; 

        varying vec2 vUv;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 1.0, uOpacity); // Blue color
        }`,
        uniforms: {
            uOpacity: { value: 1.0 },
        },
    });

    const mesh = new Mesh(gl, { geometry: rectangle, program });
    mesh.setParent(scene);

    return scene;
}

function switchScene(newScene) {
    currentScene = newScene; // Switch to the new scene
}

/* function transitionScene(camera, newScene, duration = 2000) {
    const startDistance = camera.position.z;
    const zoomOutDistance = 10; // Distance to zoom out
    const zoomInDistance = 3; // Final zoom-in distance
    const startTime = performance.now();

    // Track opacity
    const startOpacity = 1.0;
    const endOpacity = 0.0;

    // Easing function (ease-in-out cubic)
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function updateSceneOpacity(scene, opacity) {
        // Traverse the scene to update all Mesh objects
        scene.traverse((child) => {
            if (child.program && child.program.uniforms.uOpacity) {
                child.program.uniforms.uOpacity.value = opacity;
            }
        });
    }

    function animate() {
        const now = performance.now();
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1); // Normalize time

        // Apply easing to normalized time
        const easedT = easeInOutCubic(t);

        if (t < 0.5) {
            // Zoom out and fade out (first half of the duration)
            const progress = easedT / 0.5; // Normalize to 0-1 for zoom-out
            camera.position.z = lerp(startDistance, zoomOutDistance, progress);

            // Update opacity of the current scene
            updateSceneOpacity(currentScene, lerp(startOpacity, endOpacity, progress));
        } else if (t < 1) {
            // Switch scene and fade in (second half of the duration)
            if (currentScene !== newScene) {
                currentScene = newScene; // Switch the scene
                updateSceneOpacity(currentScene, endOpacity); // Start new scene fully transparent
            }
            const progress = (easedT - 0.5) / 0.5; // Normalize to 0-1 for zoom-in
            camera.position.z = lerp(zoomOutDistance, zoomInDistance, progress);

            // Update opacity of the new scene
            updateSceneOpacity(currentScene, lerp(endOpacity, startOpacity, progress));
        } else {
            // End of transition
            return;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

function lerp(start, end, t) {
    return start * (1 - t) + end * t; // Linear interpolation
} */