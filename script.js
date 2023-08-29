let burger = document.getElementById("burger_button");
let sidebar = document.getElementById("sidebar");
let close_button = document.getElementById("close_button");

burger.addEventListener("click", () => {
  sidebar.style.right = "0";
});

close_button.addEventListener("click", () => {
  sidebar.style.right = "-400px";
});

let categories = document.getElementById("categories");
let slider = document.getElementById("slider");
let arrow = document.getElementById("arrow");

slider.style.display = "none";

categories.addEventListener("click", () => {
  if (slider.style.display == "none") {
    slider.style.display = "flex";
    arrow.classList.add("fa-arrow-up");
    arrow.classList.remove("fa-arrow-down");
  } else {
    slider.style.display = "none";
    arrow.classList.add("fa-arrow-down");
    arrow.classList.remove("fa-arrow-up");
  }
});
