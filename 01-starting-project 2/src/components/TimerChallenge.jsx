import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	const timer = useRef();
	const dialog = useRef();

	function handlerStart() {
		timer.current = setInterval(() => {
			setTimeRemaining((time) => time - 10);
		}, targetTime * 10);
	}

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		setTimeRemaining(targetTime * 1000);
		dialog.current.open();
	}

	function handlerStop() {
		clearInterval(timer.current);
	}
	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} result="lost" />
			<section className="challenge">
				<h2>{title}</h2>
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
