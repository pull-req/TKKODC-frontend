import getClickedPosition from './utils/getClickedPosition';

// Setup canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', (e) => {
  const {x, y} = getClickedPosition(e);
  console.log(x, y);

  // TODO inputのフォーム表示
})