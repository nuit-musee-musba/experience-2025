import { Renderer, Texture } from 'ogl';
import { ObserverShader } from './shaders/observer-shader'

let currentScene;

export function setupCanvas(element) {
    // Initialize Renderer and Camera as before
    const canvas = element;
    const renderer = new Renderer({ canvas, antialias: true, alpha: true  });
    const gl = renderer.gl;
    document.querySelector('#app-exp-6')?.appendChild(gl.canvas) ?? document.body.appendChild(gl.canvas);

    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    const paintTexture = new Image();
    paintTexture.src = './src/assets/textures/endommagé.jpg';

    const texture = new Texture(gl, {
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
    });

    paintTexture.onload = () => {
        texture.image = paintTexture;

        console.log("texture loaded");
        currentScene = ObserverShader(gl, texture); 
    }

    const cssWidth = ((80 / 100) * window.innerHeight) * 0.75; 
    const cssHeight = (80 / 100) * window.innerHeight;

    // Resize handler
    function resize() {
        renderer.setSize(cssWidth, cssHeight);        
    }
    window.addEventListener('resize', resize);
    resize();

    document.addEventListener('switchSceneEvent', (event: CustomEvent) => {
        console.log("in the custom event youpiiii")
        if (event.detail?.scene === 'scene2') {
            switchScene(ObserverShader(gl, texture));
        }
    });

    // Render Loop
    requestAnimationFrame(function update() {
        requestAnimationFrame(update);
        if (currentScene) {
            renderer.render({ scene: currentScene });
        }
    });
}

function switchScene(newScene) {
    currentScene = newScene;
}
