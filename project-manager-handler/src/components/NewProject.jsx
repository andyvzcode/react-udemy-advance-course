import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject }) {
	const modal = useRef();
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handlerSave() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		if (
			enteredTitle.trim().length === 0 ||
			enteredDescription.trim().length === 0 ||
			enteredDueDate.trim().length === 0
		) {
			modal.current.open();
			return;
		}
		onAddProject({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}
	return (
		<>
			<Modal ref={modal} buttonCaption={"Okay"}>
				<h2>Invalid Input</h2>
				<p>Ooops ... looks like you forgot ......</p>
			</Modal>
			<div className="w-[35rem] mt-16 ">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button className="text-stone-800 hover:text-stone-950">
							Cancel
						</button>
					</li>
					<li>
						<button
							className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
							onClick={handlerSave}
						>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input type="text" label="Title" ref={title} />
					<Input label="Description" textarea ref={description} />
					<Input type="date" label="Due Date" ref={dueDate} />
				</div>
			</div>
		</>
	);
}
