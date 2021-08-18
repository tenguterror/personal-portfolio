let switchMode = document.getElementById('button');


let switchDark = (dark, borderDark) => {
  dark = document.body;
  borderDark = document.getElementById('aboutme-container');
  dark.classList.toggle('dark-mode');
  borderDark.classList.toggle('light-border');
}

switchMode.onclick = switchDark;
