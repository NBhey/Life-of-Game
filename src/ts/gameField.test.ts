import {describe, expect, test} from '@jest/globals';
import GameField from "./gameField";

describe('Game Field', ()=>{
    test("is a class", () => {
      expect(GameField).toBeInstanceOf(Function);
      expect(new GameField()).toBeInstanceOf(GameField);
    })
})