function toggleFavorite(heart) {
  heart.classList.toggle("favorited");
}

function toggleText(link) {
  var moreText = link.previousElementSibling.nextElementSibling;
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    link.textContent = "Read less...";
  } else {
    moreText.style.display = "none";
    link.textContent = "Read more...";
  }
}

function updateRating(star) {
  var stars = star.parentNode.querySelectorAll(".star-rating");
  var index = Array.from(stars).indexOf(star);

  stars.forEach(function (star) {
    star.classList.remove("filled");
  });

  for (var i = 0; i <= index; i++) {
    stars[i].classList.add("filled");
  }

  var reviewCount = star.parentNode.querySelector("span:last-child");
  reviewCount.textContent = `(${index + 1} reviews)`;
}
