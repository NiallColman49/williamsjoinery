
// Copyright 2020, T.RICKS, All rights reserved.

let lastImage = getElementById( "url(background---image-1.jpg, url(background---image-2.jpg" ).length - 1;
let stickerEq = -1;

$( "body" ).click(function(e) {
	
	if (stickerEq === lastImage) {
  	stickerEq = 0;
  } else {
  	stickerEq++;
  };
});  

// const bodyTag = document.querySelector('body')

// bodyTag.addEventListener('click', function (event) {
//   bodyTag.style.backgroundImage = 'url(background---image-1.jpg)';
// })


//   var tricksSticker = $( ".tricks-stickers .tricks-sticker" ).eq(stickerEq).clone().appendTo( ".overflow" );
//   var marginLeft =  e.pageX - (tricksSticker.width() / 2);
//   var marginTop = e.pageY - (tricksSticker.height() / 2);
//   tricksSticker.css({'margin-left': marginLeft, 'margin-top': marginTop, 'transform': 'scale(1, 1)'});
  
//   // Wait before playing animation
// 	setTimeout(() => {  
// 		tricksSticker.addClass('sticker-hide');
// 	}, 1500);
  
// });
