//alert("This video contain blood and violence. Do you want to continue ?");

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video');
    let confirmed = false;

    video.addEventListener('play', (e) => {
        if (!confirmed) {
            video.pause();
            const userConfirmed = confirm('This video contain blood and violence. Do you want to continue ?');
            if (userConfirmed) {
                confirmed = true;
                video.play();
            } else {
                window.history.back(); // Vrátí uživatele na předchozí stránku
            }
        }
    });
});
