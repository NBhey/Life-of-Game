import { Game } from "./ts/Game";
import GameField from "./ts/gameField";
import GameView from "./ts/GameView";
import "./style/style.css";
var el = document.getElementById("app");
var gameView = new GameView(el);
var gameField = new GameField(10, 10);
new Game(gameField, gameView, 1000);