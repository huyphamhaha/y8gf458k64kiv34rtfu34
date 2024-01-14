
// nav

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg')
    }
})

//Slide Show
document.addEventListener("DOMContentLoaded", function () {
    var images = [
        "./Img/background1.jpg",
        "./Img/background2.jpg",
        "./Img/background3.jpg",
        "./Img/background4.jpg",
        "./Img/background5.jpg",
        "./Img/background6.jpg",
        "./Img/background7.jpg",
        "./Img/background8.jpg",
        "./Img/background9.jpg",
        "./Img/background10.jpg",

    ]; // Thêm các đường dẫn của hình ảnh muốn chuyển đổi
    var imageElement = document.getElementById("backgroundSlide");
    var currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        var nextImage = images[currentIndex];

        imageElement.style.opacity = 0;

        setTimeout(function () {
            imageElement.src = nextImage;
            imageElement.style.opacity = 1;
        }, 2000); // 1000 milliseconds = 1 second
    }

    setInterval(changeImage, 7000); // 7000 milliseconds = 7 seconds
});
