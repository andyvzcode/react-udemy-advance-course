import React, { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
	const [timerExpired, setTimeExpired] = useState(false);
	const [timerStarted, setTimerStarted] = useState(false);

	const timer = useRef();

	function handlerStart() {
		timer.current = setTimeout(() => {
			setTimeExpired(true);
			setTimerStarted(false);
		}, targetTime * 1000);
		setTimerStarted(true);
	}

	function handlerStop() {
		clearTimeout(timer.current);
	}
	return (
		<section className="challenge">
			<h2>{title}</h2>
			{timerExpired && <p>You loss</p>}
			<p className="challenge-time">
				{targetTime} second{targetTime > 1 ? "s" : ""}
			</p>
			<button onClick={timerStarted ? handlerStop : handlerStart}>
				{timerStarted ? "Stop" : "Start"} Challenge
			</button>
			<p className={timerStarted ? "active" : undefined}>
				{timerStarted ? "Timer is running..." : "Timer Inactive"}
			</p>
		</section>
	);
}
