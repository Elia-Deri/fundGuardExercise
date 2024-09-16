//110 stands for thw width/height of the circle + 10px of padding
const MAX_HEIGHT = window.innerHeight - 110;
const MAX_WIDTH = window.innerWidth - 110;

export function getXPos(currX: number, dx: number) {
  //prevent changing on Y buttons
  if (dx !== 0) {
    if (
      (currX !== MAX_WIDTH && currX + dx > MAX_WIDTH) ||
      (currX === 0 && dx < 0)
    ) {
      return MAX_WIDTH;
    } else if ((currX === MAX_WIDTH && dx > 0) || currX + dx < 0) {
      return 0;
    } else {
      return currX + dx;
    }
  } else {
    return currX;
  }
}

export function getYPos(currY: number, dy: number) {
  //prevent changing on X buttons
  if (dy !== 0) {
    if ((currY !== 0 && currY + dy < 0) || (currY === MAX_HEIGHT && dy > 0)) {
      return 0;
    } else if (currY + dy > MAX_HEIGHT || (currY === 0 && dy < 0)) {
      return MAX_HEIGHT;
    } else {
      return currY + dy;
    }
  } else {
    return currY;
  }
}

export function getRandomPos() {
  const newX = Math.floor(Math.random() * MAX_WIDTH);
  const newY = Math.floor(Math.random() * MAX_HEIGHT);

  return [newX, newY];
}
