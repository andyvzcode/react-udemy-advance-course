import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuiestionTimer.jsx";
export default function Quiz() {
	const [answeState, setAnswerState] = useState("");
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex =
		answeState === "" ? userAnswers.length : userAnswers.length - 1;

	console.log(activeQuestionIndex);
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(
		function handleSelectAnswer(selectedAnswer) {
			setAnswerState("answered");
			setUserAnswers((prevUserAnswers) => {
				return [...prevUserAnswers, selectedAnswer];
			});
			setTimeout(() => {
				if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
					setAnswerState("correct");
				} else {
					setAnswerState("wrong");
				}

				setTimeout(() => {
					setAnswerState("");
				}, 2000);
			}, 1000);
		},
		[activeQuestionIndex]
	);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	if (quizIsComplete) {
		return (
			<div id="summary">
				<img src={quizCompleteImg} alt="Trophy icon" />
				<h2>Quiz Completed!</h2>
			</div>
		);
	}

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(() => Math.random() - 0.5);

	return (
		<div id="quiz">
			<div id="question">
				<QuestionTimer
					key={activeQuestionIndex}
					timeout={10000}
					onTimeout={handleSkipAnswer}
				/>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id="answers">
					{shuffledAnswers.map((answer) => {
						const isSelected = userAnswers[activeQuestionIndex - 1] === answer;
						let cssClasess = "";
						if (answeState === "answered" && isSelected) {
							cssClasess = "selected";
						}
						if (answeState === "correct" || answeState === "wrong") {
							cssClasess = answeState;
						}

						return (
							<li key={answer} className="answer">
								<button
									onClick={() => handleSelectAnswer(answer)}
									className={cssClasess}
								>
									{answer}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
