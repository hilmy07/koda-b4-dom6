// Buat elemen navbar
const navbar = document.createElement("nav");

// Logo
const logo = document.createElement("div");
logo.textContent = "MySite";

// Menu container
const menu = document.createElement("div");
const menuItems = ["Home", "About", "Services", "Contact"];
menuItems.forEach((text) => {
  const link = document.createElement("a");
  link.textContent = text;
  link.href = "#";
  menu.appendChild(link);
});

// Hamburger button
const hamburger = document.createElement("button");
hamburger.textContent = "☰";

// Toggle class
let menuVisible = false;
hamburger.onclick = () => {
  menuVisible = !menuVisible;
  navbar.classList.toggle("menu-open", menuVisible);
};

// Responsive handler
const mediaQuery = window.matchMedia("(max-width: 768px)");
function handleResponsive(e) {
  if (!e.matches) {
    navbar.classList.remove("menu-open");
    menuVisible = false;
  }
}

// Inisialisasi dan listener
handleResponsive(mediaQuery);
mediaQuery.addEventListener("change", handleResponsive);

// Susun DOM
navbar.appendChild(logo);
navbar.appendChild(hamburger);
navbar.appendChild(menu);
document.body.appendChild(navbar);
