const board = document.querySelector('#board');
const SQUARES_NUMBER = 20 * 30;

const getRandomColor = () => { //рандомный цвет
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
}

const getColor = () => {
  const orange = 'hsl(30, 100%, 50%)';
  let color = 'hsl(30, 100%, 50%)';

  return orange;
}

const setColor = function (element, color) {
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = function (element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square, getRandomColor()));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

//оранжевый затухает
//чем больше тем красный оранжевый затухает


