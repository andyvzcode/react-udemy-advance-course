import { useState } from "react";

export default function NewTask({ onAddTask, onDeleteTask }) {
	const [enteredTask, setEnteredTask] = useState();

	function handlerChange(event) {
		setEnteredTask(event.target.value);
	}

	function handlerClick() {
		onAddTask(enteredTask);
		setEnteredTask("");
	}
	return (
		<div className="flex items-center gap-4 ">
			<input
				type="text"
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				onChange={handlerChange}
				value={enteredTask}
			/>
			<button
				className="text-stone-700 hover:text-stone-950"
				onClick={handlerClick}
			>
				Add Task
			</button>
		</div>
	);
}
