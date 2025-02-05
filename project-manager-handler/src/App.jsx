import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
function App() {
	const [projectsState, setProjectsState] = useState({
		seletedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	function handleAddTask(text) {
		setProjectsState((prevState) => {
			const taskId = Math.random().toString();
			const newTask = {
				id: taskId,
				text,
			};
			return {
				...prevState,
				tasks: [...prevState.tasks, newTask],
			};
		});
	}

	function handleDeleteTask() {}

	function handlerSelectProject(projectId) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				seletedProjectId: projectId,
			};
		});
	}
	function handlerStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				seletedProjectId: null,
			};
		});
	}
	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			const projectId = Math.random().toString();
			const newProject = {
				...projectData,
				id: projectId,
			};
			return {
				...prevState,
				seletedProjectId: projectId,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	function handlerCancelAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				seletedProjectId: undefined,
			};
		});
	}

	function handlerDeleteProject() {
		setProjectsState((prevState) => {
			const updatedProjects = prevState.projects.filter(
				(project) => project.id !== prevState.seletedProjectId
			);
			return {
				...prevState,
				projects: updatedProjects,
				seletedProjectId: undefined,
			};
		});
	}
	const seletedProject = projectsState.projects.find(
		(project) => project.id === projectsState.seletedProjectId
	);

	let content = (
		<SelectedProject
			project={seletedProject}
			onDelete={handlerDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projectsState.tasks}
		/>
	);

	if (projectsState.seletedProjectId === null) {
		content = (
			<NewProject
				onAddProject={handleAddProject}
				onCancelProject={handlerCancelAddProject}
			/>
		);
	} else if (projectsState.seletedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handlerStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8 ">
			<ProjectsSidebar
				onStartAddProject={handlerStartAddProject}
				projects={projectsState.projects}
				onSelectProject={handlerSelectProject}
			/>

			{content}
		</main>
	);
}

export default App;
