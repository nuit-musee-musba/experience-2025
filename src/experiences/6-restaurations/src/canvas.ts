import { Renderer, Texture } from 'ogl';
import { NettoyerShader } from './shaders/nettoyer-shader';
import { ObserverShader } from './shaders/observer-shader';
import { EclairerShader } from './shaders/eclairer-shader';
import { MastiquerShader } from './shaders/mastiquer-shader';
import { RetoucherShader } from './shaders/retoucher-shader';
import { VernirShader } from './shaders/vernir-shader';
import { ApprecierShader } from './shaders/apprecier-shader';

let currentScene;

export function setupCanvas(element) {
    // Initialize Renderer
    const canvas = element;
    const renderer = new Renderer({ canvas, antialias: true, alpha: true });
    const gl = renderer.gl;
    document.querySelector('#app-exp-6')?.appendChild(gl.canvas) ?? document.body.appendChild(gl.canvas);

    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const paintTexture = new Image();
    paintTexture.src = './src/assets/textures/endommagé.jpg';

    const texture = new Texture(gl, {
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
    });

    paintTexture.onload = () => {
        texture.image = paintTexture;
        currentScene = ObserverShader(gl, texture);
        console.log("Base texture loaded");
    };

    const uvLightTexture = new Image();
    uvLightTexture.src = './src/assets/textures/uv-light.jpg';

    const textureUvLight = new Texture(gl, {
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
    });

    uvLightTexture.onload = () => {
        textureUvLight.image = uvLightTexture;
        console.log("UV light texture loaded");
    };

    const retoucheTexture = new Image();
    retoucheTexture.src = './src/assets/textures/retouché.jpg';

    const texturedRetoucheTexture = new Texture(gl, {
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
    });

    retoucheTexture.onload = () => {
        texturedRetoucheTexture.image = retoucheTexture;
        console.log("UV light texture loaded");
    };

    const resize = () => {
        const cssWidth = ((80 / 100) * window.innerHeight) * 0.75;
        const cssHeight = (80 / 100) * window.innerHeight;
        renderer.setSize(cssWidth, cssHeight);
    };

    window.addEventListener('resize', resize);
    resize();

    document.addEventListener('switchSceneEvent', (event: CustomEvent) => {
        if (event.detail?.scene === 'scene1') {
            currentScene = ApprecierShader(gl, texturedRetoucheTexture);
        }
        if (event.detail?.scene === 'scene2') {
            currentScene = EclairerShader(gl, texture, textureUvLight);
        }
        if (event.detail?.scene === 'scene3') {
            currentScene = NettoyerShader(gl, texture);
        }
        if (event.detail?.scene === 'scene4') {
            currentScene = MastiquerShader(gl, texture);
        }
        if (event.detail?.scene === 'scene5') {
            currentScene = RetoucherShader(gl, texture, texturedRetoucheTexture);
        }
        if (event.detail?.scene === 'scene6') {
            currentScene = VernirShader(gl, texturedRetoucheTexture, texture);
        }
    });

    requestAnimationFrame(function update() {
        requestAnimationFrame(update);
        if (currentScene) {
            renderer.render({ scene: currentScene });
        }
    });
}
