import "./App.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { useState } from "react";
function App() {
	const [mark, setMark] = useState("");
	const handleMark = (e) => {
		setMark(e.target.value);
	};
	return (
		<div className="main">
			<textarea
				cols={100}
				rows={100}
				onChange={handleMark}
				value={mark}
			/>
			<ReactMarkdown className="mm" children={mark}></ReactMarkdown>
		</div>
	);
}

export default App;
