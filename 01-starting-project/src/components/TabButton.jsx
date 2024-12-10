export default function TabButton({ title, isActive, onSelect, children }) {
	return (
		<li>
			<button onClick={onSelect}>{children}</button>
		</li>
	);
}
