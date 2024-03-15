document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");

    let currentIndex = 0;
    let autoplayInterval;

    function showImage(index) {
        images.forEach(image => {
            image.style.display = "none";
        });
        images[index].style.display = "block";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextImage, 3000); // Adjust autoplay speed (in milliseconds)
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Show the first image initially
    showImage(currentIndex);

    // Event listeners for next and previous buttons
    document.querySelector(".next-btn").addEventListener("click", function() {
        stopAutoplay();
        nextImage();
        startAutoplay();
    });
    document.querySelector(".prev-btn").addEventListener("click", function() {
        stopAutoplay();
        prevImage();
        startAutoplay();
    });

    // Start autoplay when the page loads
    startAutoplay();
});
