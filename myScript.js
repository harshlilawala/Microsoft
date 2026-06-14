
document.addEventListener("DOMContentLoaded", function () {

    const carouselElement =
        document.querySelector("#carouselExampleInterval");

    const carousel =
        bootstrap.Carousel.getOrCreateInstance(carouselElement);

    const btn = document.getElementById("playPauseBtn");

    let paused = false;

    btn.addEventListener("click", function () {

        if (paused) {
            carousel.cycle();
            btn.innerHTML = "❚❚";
        } else {
            carousel.pause();
            btn.innerHTML = "▶";
        }

        paused = !paused;
    });

});
