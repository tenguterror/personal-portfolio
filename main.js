const switchMode = document.getElementById('button');

const switchDark = (switchMode.onclick = () => {
  let mode = document.getElementById('button').innerHTML;
  let body = document.body;
  if (mode === 'Dark Mode') {
    document.getElementById('button').innerHTML = 'Light Mode';
    body.classList.remove('dark-mode');
  } else if (mode === 'Light Mode') {
    document.getElementById('button').innerHTML = 'Dark Mode';
    body.classList.toggle('dark-mode');
  } else {
    throw Error('Something went wrong!');
  }
});
