import "./App.css";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import API_ENDPOINT, { API_ID, API_KEY } from "../src/Store";

function App() {
	const [collector, setCollectore] = useState([]);
	const [inputCollector, setInputCollector] = useState("");
	const [queryCollector, querySetter] = useState("");

	useEffect(() => {
		const fetchFun = async () => {
			const { hits } = await (
				await fetch(
					`https://api.edamam.com/api/recipes/v2?type=public&q=${queryCollector}&app_id=${API_ID}&app_key=${API_KEY}`
				)
			).json();
			setCollectore([...hits]);
		};
		fetchFun();
	}, [queryCollector]);
	const submit = () => {
		querySetter(inputCollector);
		setInputCollector("");
	};
	return (
		<>
			<input
				value={inputCollector}
				onChange={(e) => setInputCollector(e.target.value)}
				placeholder="Search your recipie"
			/>
			<button onClick={submit}>Submit</button>
			<hr />
			<ul style={{ display: "flex", flexWrap: "wrap", width: "100vw" }}>
				{collector.map((e) => {
					return (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "300px",
							}}>
							<img width={100} src={e.recipe.image} alt="" />
							<p>Recipe_Name: {e.recipe.label}</p>
						</div>
					);
				})}
			</ul>
		</>
	);
}

export default App;
