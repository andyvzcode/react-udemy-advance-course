import { useState } from "react";

import { EXAMPLES } from "../../data";
import Section from "../Section";
import Tabs from "../Tabs";
import Example from "../Example";
const Examples = () => {
	const [selectedTopic, setSelectedTopic] = useState("");
	const handlerSelect = (SelectedButton) => {
		setSelectedTopic(SelectedButton);
	};
	return (
		<Section title="Examples" id="examples">
			<Tabs
				menus={["components", "jsx", "props", "state"]}
				selectedTopic={selectedTopic}
				handlerSelect={handlerSelect}
			>
				<Example selectedTopic={selectedTopic} examples={EXAMPLES} />
			</Tabs>
		</Section>
	);
};

export default Examples;
