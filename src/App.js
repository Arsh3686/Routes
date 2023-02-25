import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
function App() {
	const [mode, setMode] = useState(false);
	const update = () => {
		setMode(!mode);
	};
	// const
	return (
		<div
			className="main"
			style={{
				backgroundColor: mode === true ? "black" : "white",
				color: mode === true ? "white" : "black",
			}}>
			<Header update={update} mode={mode} />
			<Content />
		</div>
	);
}

export default App;
