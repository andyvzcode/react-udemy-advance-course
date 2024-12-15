import TabButton from "../components/TabButton";

export default function Tabs({
	children,
	menus,
	selectedTopic,
	handlerSelect,
	Container = "menu",
}) {
	return (
		<>
			<Container>
				{menus.map((concept) => (
					<TabButton
						isSelected={selectedTopic === concept}
						onClick={() => handlerSelect(concept)}
					>
						{concept}
					</TabButton>
				))}
			</Container>
			{children}
		</>
	);
}
