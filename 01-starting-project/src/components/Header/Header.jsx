import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDesctions = ["core", "crucial", "fundamental"];

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

export default Header;
