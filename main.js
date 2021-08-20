let switchMode = document.getElementById('button');


let switchDark = (dark, borderDark) => {
  dark = document.body;
  borderDark = document.getElementById('aboutme-container');
  dark.classList.toggle('dark-mode');
  borderDark.style.border = '1px solid white';
}

switchMode.onclick = switchDark;
