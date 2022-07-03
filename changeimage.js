const bodyTag = document.querySelector("body");

let imageGallery = [
  "url(williams-joinery-2---legacy.jpg)",
  "url(williams-joinery-3---legacy.jpg)",
  "url(williams-joinery-4---legacy.jpg)",
  "url(williams-joinery-6---legacy.jpg)",
  "url(williams-joinery-7---legacy.jpg)",
  "url(williams-joinery-9---legacy.jpg)",
  "url(williams-joinery-10---legacy.jpg)",
  "url(williams-joinery-14---legacy.jpg)",
  "url(williams-joinery-12---legacy.jpg)",
  "url(williams-joinery-8---legacy.jpg)",
];

let counter = 0;

bodyTag.addEventListener("click", function (event) {
  bodyTag.style.backgroundImage = imageGallery[counter++];
});
