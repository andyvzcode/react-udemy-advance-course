import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";

const CoreConcepts = () => {
	return (
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
	);
};

export default CoreConcepts;
