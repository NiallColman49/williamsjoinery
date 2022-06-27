let images = ["BCover.jpg", "MechGP.jpg", "Mech2.jpg", "Mech3.jpg", "Mech4.jpg", "MCA1.png"];
const gallery = document.getElementById("ImgGallery");
let index = 0;

gallery.addEventListener("click", function() {
    gallery.src = images[index];
    index = (index === images.length - 1) ? 0 : index + 1;
});