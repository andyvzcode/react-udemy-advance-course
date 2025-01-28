import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimerChallenge title="Challenge 1" targetTime={1} />
				<TimerChallenge title="Challenge 2" targetTime={20} />
				<TimerChallenge title="Challenge 3" targetTime={30} />
				<TimerChallenge title="Challenge 4" targetTime={40} />
			</div>
		</>
	);
}

export default App;
