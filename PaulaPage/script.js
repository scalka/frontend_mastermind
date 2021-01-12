/* Toggle mobile menu */
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

toggle.addEventListener("click", toggleMenu, false);

/* Submenu activator */
const submenu = document.querySelector(".has-submenu");

function subMenu() {
  if (submenu.classList.contains("sub-active")) {
    submenu.classList.remove("sub-active");
  }
    else{
    submenu.classList.add("sub-active");
  }
}

submenu.addEventListener("click", subMenu, false);

/* search activator */
const search = document.querySelector(".search");

function Look() {
  if (search.classList.contains("search-active")) {
    search.classList.remove("search-active");
  }
    else{
      search.classList.add("search-active");
  }
}

search.addEventListener("click", Look, false);