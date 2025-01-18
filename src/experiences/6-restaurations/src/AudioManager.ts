export class AudioManager {
    private backgroundMusic: HTMLAudioElement;
    private clickSound: HTMLAudioElement;

    constructor() {
        // Initialize audio elements
        this.backgroundMusic = new Audio('./src/assets/audio/music-back.mp3');
        this.clickSound = new Audio('./src/assets/audio/HOME.mp3');

        // Configure background music
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.5;

        // Preload click sound for instant playback
        this.clickSound.preload = 'auto';

        // Attach user interaction event listeners for autoplay compliance
        this.attachInteractionListeners();
    }

    private attachInteractionListeners(): void {
        const startMusic = () => {
        // Play background music on first user interaction
        this.playBackgroundMusic().then(() => {
            console.log('Background music started');
            // Remove interaction listeners after music starts
            window.removeEventListener('touchstart', startMusic);
            window.removeEventListener('click', startMusic);
        }).catch(err => {
            console.error('Error playing background music:', err);
        });
        };

        // Add both touchstart and click listeners for user interaction
        window.addEventListener('touchstart', startMusic, { once: true });
        window.addEventListener('click', startMusic, { once: true });

        console.log('Interaction listeners attached for background music');
    }

    playBackgroundMusic(): Promise<void> {
        console.log('Attempting to play background music...');
        return this.backgroundMusic.play().catch(err => {
        console.error('Error playing background music:', err);
        throw err; // Propagate error for debugging
        });
    }

    pauseBackgroundMusic(): void {
        console.log('Pausing background music...');
        this.backgroundMusic.pause();
    }

    playClickSound(): void {
        console.log('Attempting to play click sound...');
        this.clickSound.currentTime = 0; // Reset playback to the start
        this.clickSound.volume = 0.5;
        this.clickSound.play().catch(err => console.error('Error playing click sound:', err));
    }
}
