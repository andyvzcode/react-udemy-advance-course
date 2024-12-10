export default function TabButton({ title, onSelect, children }) {
	return (
		<li>
			<button onClick={onSelect}>{children}</button>
		</li>
	);
}
