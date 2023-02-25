import "./App.css";
import Card from "./components/Card";
import Data from "./Data";
function App() {
	return (
		<div className="main">
			{Data.map((e) => {
				return <Card e={e} />;
			})}
		</div>
	);
}

export default App;
