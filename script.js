// PHOTO VIDEO TOGGLE 
const photoBtn = document.getElementById('photoBtn');
const videoBtn = document.getElementById('videoBtn');
const photoContainer = document.querySelector('.babe-photo-container');
const videoContainer = document.querySelector('.babe-video-container');
const allVideos = videoContainer.querySelectorAll('video');

function setActiveButton(activeBtn) {
    [photoBtn, videoBtn].forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

photoBtn.addEventListener('click', () => {
    // Pause all videos
    allVideos.forEach(video => {
        video.pause();
        video.currentTime = 0; // optional: reset to start
    });

    // Toggle view
    videoContainer.classList.remove('active');
    photoContainer.classList.add('active');
    setActiveButton(photoBtn);
});

videoBtn.addEventListener('click', () => {
    photoContainer.classList.remove('active');
    videoContainer.classList.add('active');
    setActiveButton(videoBtn);
});

videoContainer.classList.remove('active');

setTimeout(() => {
    photoContainer.classList.add('active');
}, 1500);


// PHOTO POPUP
document.querySelectorAll(".babe-photo-card img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup-babe-photo").style.display = "block";
        document.querySelector(".popup-babe-photo img").src =
            image.getAttribute("src");
    };
});

document.querySelector(".popup-babe-photo span").onclick = () => {
    document.querySelector(".popup-babe-photo").style.display = "none";
};

// BACK TO TOP
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// True parallax effect by adjusting background scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // The lower the factor, the slower the background moves
    document.body.style.backgroundPositionY = `${scrollY * 0.5}px`;
});
