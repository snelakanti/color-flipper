const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function () {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    const randomVal = hex[Math.floor(Math.random() * hex.length)];
    arr.push(randomVal);
  }
  const randomHex = `#${arr.join("")}`;
  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});
