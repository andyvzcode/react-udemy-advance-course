import { useEffect, useState } from "react";

const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
	const [progress, setProgress] = useState(TIMER);
	useEffect(() => {
		const interval = setInterval(() => {
			console.log("interval");
			setProgress((progressTime) => progressTime - 10);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log("timer");
			onConfirm();
		}, TIMER);
		return () => {
			console.log("clean time");
			clearTimeout(timer);
		};
	}, [onConfirm]);
	return (
		<div id="delete-confirmation">
			<h2>Are you sure?</h2>
			<p>Do you really want to remove this place?</p>
			<div id="confirmation-actions">
				<button onClick={onCancel} className="button-text">
					No
				</button>
				<button onClick={onConfirm} className="button">
					Yes
				</button>
				<progress value={progress} max={TIMER} />
			</div>
		</div>
	);
}
