// select element

// menu
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");

const clickMenu = () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};

menuToggle.addEventListener("click", clickMenu);
