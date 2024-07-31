const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const actives = document.querySelectorAll(".active");
console.log(progress, circles.length, next, prev);

let currentActive = 1;

next.addEventListener("click", () => {
  {
    currentActive < circles.length
      ? currentActive++
      : alert("No more steps Available");
  }

  update();
  currentActive == circles.length
    ? (next.disabled = true)
    : (next.disabled = false);
});

prev.addEventListener("click", () => {
  currentActive <= circles.length && currentActive > 1
    ? currentActive--
    : alert("No more steps Available");
  update();
  currentActive == 1 ? (prev.disabled = true) : (prev.disabled = false);
});

function update() {
  circles.forEach((circle, i) => {
    i < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });
  progress.style.width = (currentActive - 1) * 20 + "%";
}
