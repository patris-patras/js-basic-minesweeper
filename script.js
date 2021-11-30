// display / UI

import { createaBoard } from "./minesweeper.js";

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 2;

const board = createaBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector(".board");

board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element);
  });
});

boardElement.style.setProperty("--size", BOARD_SIZE);

// populate board with tiles
// left click on tiles
// right click on tiles
// check for win/lose
