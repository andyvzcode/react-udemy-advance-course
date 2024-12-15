import { useState } from "react";

import TabButton from "../../components/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section";

const Examples = () => {
	const [selectedTopic, setSelectedTopic] = useState("");
	const concepts = ["components", "jsx", "props", "state"];
	const handlerSelect = (SelectedButton) => {
		setSelectedTopic(SelectedButton);
	};
	return (
		<Section title="Examples" id="examples">
			<menu>
				{concepts.map((concept) => (
					<TabButton
						isSelected={selectedTopic === concept}
						onClick={() => handlerSelect(concept)}
					>
						{concept}
					</TabButton>
				))}
			</menu>
			{!selectedTopic && <p>Please select a topic.</p>}

			{selectedTopic && (
				<div id="tab-content">
					<h3>{EXAMPLES[selectedTopic]?.title}</h3>
					<p>{EXAMPLES[selectedTopic]?.description}</p>
					<pre>
						<code>{EXAMPLES[selectedTopic]?.code}</code>
					</pre>
				</div>
			)}
		</Section>
	);
};

export default Examples;
