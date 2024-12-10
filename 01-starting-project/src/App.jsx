import reactImg from "./assets/react-core-concepts.png";
import componentImage from "./assets/components.png";
const reactDesctions = ["core", "crucial", "fundamental"];
import { CORE_CONCEPTS } from "./data";

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max + 1);
};

const Header = () => {
	const description = reactDesctions[getRandomInt(2)];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
};
function CoreConcepts({ title, description, img }) {
	return (
		<>
			<li>
				<img src={img} alt="" />
				<h3>{title}</h3>
				<p>{description}</p>
			</li>
		</>
	);
}
function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((concept) => (
							<CoreConcepts
								key={concept.title}
								title={concept.title}
								description={concept.description}
								img={concept.image}
							/>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
