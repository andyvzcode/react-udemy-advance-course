import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
	};

	const handleChangeName = (e) => {
		setPlayerName(e.target.value);
	};

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{isEditing ? (
					<input type="text" onChange={handleChangeName} value={playerName} />
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
