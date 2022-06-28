let  counter = 0;

let gallery = ['./background---image-1.jpg', './background---image-2.jpg', './background---image-1.jpg', './background---image-2.jpg'],
rotateGallery = function () {
    document.getElementById("image-1").src = gallery[counter];
    counter ++;
    if (counter >= gallery.length) {
        counter = 0;
    }
};