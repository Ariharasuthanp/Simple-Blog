function toggleFavorite(heart) {
  heart.classList.toggle("favorited");
}

function toggleText(link) {
  const article = link.closest(".post");
  const moreText = article.querySelector(".more-text");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    link.textContent = "Read less...";
  } else {
    moreText.style.display = "none";
    link.textContent = "Read more...";
  }
}

function updateRating(star) {
  const stars = star.parentNode.querySelectorAll(".star-rating");
  const index = Array.from(stars).indexOf(star);

  stars.forEach((s, i) => {
    s.classList.toggle("filled", i <= index);
  });

  const reviewCount = star.parentNode.querySelector("span:last-child");
  reviewCount.textContent = `(${index + 1} review${index === 0 ? "" : "s"})`;
}
