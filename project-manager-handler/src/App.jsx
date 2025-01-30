import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from "react";

function App() {
	const [projectsState, setProjectsState] = useState({
		seletedProjectId: undefined,
		projects: [],
	});

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

	console.log(projectsState);
	let content;

	if (projectsState.seletedProjectId === null) {
		content = <NewProject onAddProject={handleAddProject} />;
	} else if (projectsState.seletedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handlerStartAddProject} />;
	} else {
		content = <p>Project Details</p>;
	}

	return (
		<main className="h-screen my-8 flex gap-8 ">
			<ProjectsSidebar
				onStartAddProject={handlerStartAddProject}
				projects={projectsState.projects}
			/>

			{content}
		</main>
	);
}

export default App;
