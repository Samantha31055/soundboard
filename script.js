const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'clock'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    const soundElement = document.getElementById(sound);

    // Listen for when the audio ends to reset button text
    soundElement.addEventListener('ended', () => {
        btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);
    });

    // Button click event
    btn.addEventListener('click', () => {
        if (soundElement.paused) {
            stopSounds();
            soundElement.play();
            btn.innerText = `Stop ${sound.charAt(0).toUpperCase() + sound.slice(1)}`;
        } else {
            soundElement.pause();
            soundElement.currentTime = 0; // Reset the sound to the beginning
            btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);
        }
    });

    document.getElementById('buttons').appendChild(btn);
});

// Function to stop all sounds
function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);

        snd.pause();
        snd.currentTime = 0; // Reset all sounds to the beginning
    });
}
