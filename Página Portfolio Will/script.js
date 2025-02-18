document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const content = document.getElementById('content');
    const videoPreviews = document.querySelectorAll('.video-preview');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        content.classList.toggle('blur');
    });

    document.addEventListener('click', (event) => {
        if (!navList.contains(event.target) && !mobileMenu.contains(event.target)) {
            navList.classList.remove('active');
            content.classList.remove('blur');
        }
    });

    videoPreviews.forEach(preview => {
        const video = preview.querySelector('.preview-video');

        preview.addEventListener('mouseover', () => {
            video.play();
        });

        preview.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0;
        });

        document.addEventListener('click', (event) => {
            if (!preview.contains(event.target)) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
});