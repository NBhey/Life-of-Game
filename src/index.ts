import { Game } from "./ts/Game";
import GameField from "./ts/gameField";
import GameView  from "./ts/GameView";
import "./style/style.css";

const el = document.getElementById("app") as HTMLElement;

const gameView = new GameView(el);
const gameField = new GameField(10, 10);
new Game(gameField, gameView, 1000);
