export default function QuestionTimer({ timeout, onTimeout }) {
	setTimeout(() => {}, timeout);

	return <progress id="question-time" value={timeLimit} max={timeLimit} />;
}
