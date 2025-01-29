import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	const timer = useRef();
	const dialog = useRef();

	if (timeRemaining < 0) {
		clearInterval(timer.current);
		dialog.current.open();
	}
	function handlerStart() {
		timer.current = setInterval(() => {
			setTimeRemaining((time) => time - 10);
		}, 10);
	}

	function handlerStop() {
		clearInterval(timer.current);
		dialog.current.open();
	}

	function handleReset() {
		setTimeRemaining(targetTime * 1000);
	}
	return (
		<>
			<ResultModal
				ref={dialog}
				targetTime={targetTime}
				remainingTime={timeRemaining}
				onReset={handleReset}
			/>
			<section className="challenge">
				<h2>
					{title} {`${timerIsActive}`}
				</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>

				<button onClick={timerIsActive ? handlerStop : handlerStart}>
					{timerIsActive ? "Stop" : "Start"} Challenge
				</button>
				<p className={timerIsActive ? "active" : undefined}>
					{timerIsActive ? "Timer is running..." : "Timer Inactive"}
				</p>
			</section>
		</>
	);
}
