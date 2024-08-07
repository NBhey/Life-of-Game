import { describe, expect, test, beforeEach } from "@jest/globals";
import GameField from "./gameField";

describe("Game Field", () => {
  test("is a class", () => {
    expect(GameField).toBeInstanceOf(Function);
    expect(new GameField()).toBeInstanceOf(GameField);
  });

  test("has a function getState", () => {
    const gameField = new GameField();
    expect(gameField.getState).toBeInstanceOf(Function);
    expect(gameField.getState()).toEqual([[]]);
  });

  describe("functional tests", () => {
    const width = 2;
    const height = 3;
    let gameField;
    beforeEach(() => {
      gameField = new GameField(height, width);
    });

    test("supports settings side from constructor", () => {
      expect(gameField.getState()).toEqual([
        [0, 0],
        [0, 0],
        [0, 0],
      ]);
    });

    test("has .toggleCellState method", () => {
      expect(gameField.toggleCellState).toBeInstanceOf(Function);
      const [x1, y1] = [0, 0];
      const [x2, y2] = [1, 2];
      gameField.toggleCellState(x1, y1);
      gameField.toggleCellState(x2, y2);
      expect(gameField.getState()).toEqual([
        [1, 0],
        [0, 0],
        [0, 1],
      ]);
      gameField.toggleCellState(x2, y2);
      expect(gameField.getState()).toEqual([
        [1, 0],
        [0, 0],
        [0, 0],
      ]);
    });
  });
});
