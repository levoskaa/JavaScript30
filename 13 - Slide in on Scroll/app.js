const slidingImages = document.querySelectorAll("img.slide-in");

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  for (const slidingImage of slidingImages) {
    const imageBottom = slidingImage.offsetTop + slidingImage.height;
    // Half way through the height of the image.
    const slideInAt = slidingImage.offsetTop + slidingImage.height / 2;
    const isHalfShown = slideInAt <= window.scrollY + window.innerHeight;
    const isScrolledPast = imageBottom < window.scrollY;
    if (isHalfShown && !isScrolledPast) {
      slidingImage.classList.add("active");
    } else {
      slidingImage.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", debounce(checkSlide));
