let switchMode = document.getElementById("button");

const switchDark = (switchMode.onclick = function () {
  const old = document.getElementById("button").innerHTML;
  let body = document.body;
  if (old === 'Dark Mode') {
    document.getElementById("button").innerHTML = 'Light Mode';
    body.classList.remove('dark-mode');
  } else if (old === 'Light Mode') {
    document.getElementById("button").innerHTML = 'Dark Mode';
    body.classList.toggle("dark-mode");
  } else {
    console.log('ERROR');
  }
});