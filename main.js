let switchMode = document.getElementById("button");

let switchDark = (dark) => {
  dark = document.body;
  dark.classList.toggle("dark-mode");
};

switchMode.onclick = switchDark;
