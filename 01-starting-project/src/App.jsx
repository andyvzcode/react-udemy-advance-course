import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
	const handlerSelect = (SelectedButton) => {
		console.log(SelectedButton);
	};
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((concept) => (
							<CoreConcept
								key={concept.title}
								title={concept.title}
								description={concept.description}
								img={concept.image}
							/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handlerSelect("components")}>
							{" "}
							Components{" "}
						</TabButton>
						<TabButton onSelect={() => handlerSelect("jsx")}> JSX </TabButton>
						<TabButton onSelect={() => handlerSelect("props")}>
							{" "}
							Props{" "}
						</TabButton>
						<TabButton onSelect={() => handlerSelect("state")}>
							{" "}
							State{" "}
						</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;
