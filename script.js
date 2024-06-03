let images = ["scorpion.png", "subzero.png", "smoke.png", "raiden.png", "group.png", "kenschi.png" ];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slideshow").src = images[currentIndex];
}

setInterval(changeImage, 5000);
