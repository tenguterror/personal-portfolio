let switchMode = document.getElementById("button");

const switchDark = (switchMode.onclick = function () {
  let mode = document.getElementById("button").innerHTML;
  let body = document.body;
  if (mode === 'Dark Mode') {
    mode = 'Light Mode';
    body.classList.remove('dark-mode');
  } else if (mode === 'Light Mode') {
    mode = 'Dark Mode';
    body.classList.toggle("dark-mode");
  } else {
    console.log('ERROR');
  }
});