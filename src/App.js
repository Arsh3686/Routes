import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Data from "./Data";
function App() {
	const [arr] = useState(Data);
	return (
		<div className="main">
			{arr.map((e) => {
				return <Content e={e} key={e} />;
			})}
		</div>
	);
}

export default App;
