let switchMode = document.getElementById('button');

let switchDark = () => {
  let element = document.body;
  element.classList.toggle('dark-mode');
}

switchMode.onclick = switchDark;

// switchMode.onclick = function switchMode() {
//   let element = document.body;
//   element.classList.toggle('dark-mode');
// }