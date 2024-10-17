const videos = document.querySelectorAll('.video');
const playPauseBtns = document.querySelectorAll('.playPauseBtn');

playPauseBtns.forEach((btn, index) => {
    const video = videos[index]; // Get the corresponding video
    const icon = btn.querySelector('i'); // Get the Font Awesome icon inside the button

    // Play/Pause functionality
    btn.addEventListener('click', () => {
        if (video.paused) {
            // Pause all other videos before playing the clicked one
            videos.forEach((vid, vidIndex) => {
                if (vidIndex !== index) {
                    vid.pause();
                    const otherIcon = playPauseBtns[vidIndex].querySelector('i');
                    otherIcon.classList.remove('fa-pause');
                    otherIcon.classList.add('fa-play');
                }
            });

            video.play();
            icon.classList.remove('fa-play');  // Remove play icon
            icon.classList.add('fa-pause');    // Add pause icon
        } else {
            video.pause();
            icon.classList.remove('fa-pause'); // Remove pause icon
            icon.classList.add('fa-play');     // Add play icon
        }
    });

    // Ensure icon updates if video is paused or played through other means
    video.addEventListener('pause', () => {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    });

    video.addEventListener('play', () => {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    });
});
