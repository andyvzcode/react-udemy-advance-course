import { useEffect, useState } from "react";
export default function ProgressBar({ timer }) {
	const [progress, setProgress] = useState(timer);
	useEffect(() => {
		const interval = setInterval(() => {
			console.log("interval");
			setProgress((progressTime) => progressTime - 10);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <progress value={progress} max={timer} />;
}
