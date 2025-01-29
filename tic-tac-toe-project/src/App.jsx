import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import WINNING_COMBINATIONS from "./winning";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurns) {
	let currentPlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	}
	return currentPlayer;
}
const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveWinner(gameBoard, players) {
	let winner;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];

		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].col];

		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}
	return winner;
}

function deriveGameBoard(gameTurns) {
	let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

	for (const turn of gameTurns) {
		const { player, square } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}
	return gameBoard;
}

const PLAYERS = {
	X: "Player 1",
	O: "Player 2",
};

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);

	const [players, setPlayerNames] = useState(PLAYERS);

	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);
	const hasDraw = gameTurns.length === 9 && !winner;

	const handleSelectSquare = (rowIndex, colIndex) => {
		setGameTurns((prevGameTurns) => {
			const currentPlayer = deriveActivePlayer(prevGameTurns);
			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevGameTurns,
			];

			return updatedTurns;
		});
	};

	function handlerRestart() {
		setGameTurns([]);
	}

	function handlerPlayerNameChange(symbol, newName) {
		setPlayerNames((prevPlayerNames) => ({
			...prevPlayerNames,
			[symbol]: newName,
		}));
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName={PLAYERS.X}
						symbol="X"
						isActive={activePlayer === "X"}
						onChangeName={handlerPlayerNameChange}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol="O"
						isActive={activePlayer === "O"}
						onChangeName={handlerPlayerNameChange}
					/>
				</ol>

				{(winner || hasDraw) && (
					<GameOver winner={winner} onRestart={handlerRestart} />
				)}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
