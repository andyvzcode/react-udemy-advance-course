export default function Example({ selectedTopic, examples }) {
	return (
		<>
			{!selectedTopic && <p>Please select a topic.</p>}
			{selectedTopic && (
				<div id="tab-content">
					<h3>{examples[selectedTopic]?.title}</h3>
					<p>{examples[selectedTopic]?.description}</p>
					<pre>
						<code>{examples[selectedTopic]?.code}</code>
					</pre>
				</div>
			)}
		</>
	);
}
