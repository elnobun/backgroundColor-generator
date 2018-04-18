const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomColor = document.querySelector("button");

const getRandomColor = () => {
  const setters = "0123456789ABCDEF";
  let color = "#";
  for (const set of setters) {
    if (set < 6) {
      color += set[Math.floor(Math.random() * 16)];
    }
  }
  return color;
};

const gradientSelector = event => {
  if (event === undefined || event.target.id === "randomize") {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
  }

  body.style.background = `linear-gradient(to right, 
    ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
};

color1.addEventListener("input", gradientSelector);
color2.addEventListener("input", gradientSelector);
randomColor.addEventListener("click", gradientSelector);
