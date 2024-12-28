document.addEventListener("DOMContentLoaded", function () {
  const pictures = document.querySelectorAll("#picture-list picture");

  pictures.forEach((picture) => {
    picture.addEventListener("click", function () {
      pictures.forEach((pic) => pic.classList.remove("active"));
      picture.classList.add("active");
    });
  });
});
