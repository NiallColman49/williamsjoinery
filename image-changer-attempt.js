// array containing all images
const images = [
'background---image-1.jpg',
'background---image-2.jpg',
'hounslowkinkora.highres-36.jpeg'
];

function changeImageOnClick(images) {
  this.images = images;
  this.i = 0;
  this.next = function(img) {
  this.i++;
  if (this.i === images.length) this.i = 0;
  img.src = images[this.i];
  };
}

