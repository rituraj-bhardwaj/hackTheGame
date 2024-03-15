// alert("hi!");
document.querySelector(".category-button").addEventListener("click", (event) => {
    // alert("button got clicked !");
    // const clickedButton = document.querySelector("")
    // console.log(this.getAttribute("id"));
    // window.location.href = "http://127.0.0.1:3000/index.html"
});

const images = document.querySelectorAll("img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("blur");
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("blur");
  });
});

// lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true
// });

// script for fancybox....
$(document).ready(function() {
  $('[data-fancybox="gallery"]').fancybox({
    // Fancybox options
    loop: true,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
  });
});
