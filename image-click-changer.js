// Empty array for our images
$images = [
'background---image-1.jpg',
'background---image-2.jpg',
'hounslowkinkora.highres-36.jpeg'
];

// Get the urls and wrap each one in single qoutes
foreach ($page => images() as $img) {
  $images[] = "'". $img->url() . "'";
}

// Make the comma seperated list that javascript can read
$images = implode(', ', $images)

?>

<script>

function ImageCollection(images) {
  this.images = images;
  this.i = 0;
  this.next = function(img) {
    this.i++;
    if (this.i == images.length) this.i = 0;
    img.src = images[this.i];
  };
}

// Use the list of images created above
var imgSet = new ImageCollection([<?= $images ?>]);

</script>


<img src='<?= $page->images()->first()->url() ?>' onclick="imgSet.next(this)"></img>