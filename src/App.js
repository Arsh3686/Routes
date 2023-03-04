import "./App.css";
import { useEffect, useState } from "react";
import API_KEY from "../src/Store";

function App() {
	const [collector, setCollectore] = useState([]);
	const [inputCollector, setInputCollector] = useState("");
	const [queryCollector, querySetter] = useState("Iron");

	useEffect(() => {
		const fetchFun = async () => {
			const { Search } = await (
				await fetch(
					`https://www.omdbapi.com/?s=${queryCollector}&apikey=${API_KEY}`
				)
			).json();
			console.log(Search);
			setCollectore([...Search]);
		};
		fetchFun();
	}, [queryCollector]);
	const submit = () => {
		querySetter(inputCollector);
		setInputCollector("");
	};
	return (
		<>
			<div className="hooked">Hooked</div>
			<input
				value={inputCollector}
				onChange={(e) => setInputCollector(e.target.value)}
				placeholder="Search your Movies"
			/>
			<button onClick={submit}>Submit</button>
			<hr />
			<ul
				style={{
					display: "flex",
					flexWrap: "wrap",
					width: "100vw",
					justifyContent: "center",
				}}>
				{collector.map((e, id) => {
					return (
						<div
							key={id}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "200px",
								height: "300px",
							}}>
							<img width={150} src={e.Poster} alt={e.Title} />
							<p>Movie_Name: {e.Title}</p>
						</div>
					);
				})}
			</ul>
		</>
	);
}

export default App;
