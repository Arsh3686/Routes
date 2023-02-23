import "./App.css";
import Card from "./components/Card";
import Data from "./components/Data";
function App() {
	return (
		<div className="Container">
			{Data.map((e) => (
				<Card item={e} />
			))}
		</div>
	);
}

export default App;
