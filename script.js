
let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

images.forEach(function(img) {
  img.onclick = function() {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  };
});

lightbox.onclick = function() {
  lightbox.style.display = "none";
};
function filterImages(category) {
  images.forEach(function(img) {
    if(category === 'all' || img.classList.contains(category)){
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
