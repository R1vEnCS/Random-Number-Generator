const btn = document.querySelector(".btn");
const res = document.querySelector(".res");
btn.addEventListener("click", function () {
  const min = Number(document.querySelector(".minN").value);
  const max = Number(document.querySelector(".maxN").value);
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  res.classList.remove("hidden");
  res.textContent = `Results : ${randomNumber}`;
});
