import NewTask from "./NewTask";

export default function Task({ tasks, onAddTask, onDeleteTask }) {
	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
			<NewTask onAddTask={onAddTask} />
			{tasks.length == 0 && (
				<p className="text-stone-800 my-4">
					This project does not have any task yet.
				</p>
			)}

			{tasks.length > 0 && (
				<u className="">
					{tasks.map((task) => (
						<li
							key={task.id}
							className="flex justify-between items-center my-4 rounded-md bg-stone-200 p-4 no-underline"
						>
							<span className="no-underline">{task.text}</span>
							<button
								className="text-stone-700 hover:text-stone-950"
								onClick={() => onDeleteTask(task.id)}
							>
								Clear
							</button>
						</li>
					))}
				</u>
			)}
		</section>
	);
}
