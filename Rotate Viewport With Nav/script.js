let openMenu = document.getElementById("open");
let closeMenu = document.getElementById("close");
let container = document.getElementById("container");

function clickMenu() {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  container.classList.add("show-nav");
}

openMenu.addEventListener("click", clickMenu);

function clickClose() {
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  container.classList.remove("show-nav");
}

closeMenu.addEventListener("click", clickClose);
