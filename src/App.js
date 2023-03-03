import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { createContext, useContext, useEffect, useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Store from "./Store";
export const Context = createContext(Store);
function App() {
	const ctx = useContext(Context);
	const [toggler, setToggler] = useState(false);
	const { toggle, color } = ctx;
	const toggles = () => {
		setToggler(!toggler);
	};
	useEffect(() => {
		ctx.toggle = toggler ? "white" : "black";
		ctx.color = toggler ? "black" : `#6AD5B1`;
	}, [toggler]);

	return (
		<Context.Provider value={Store}>
			<div
				style={{
					backgroundColor: `${toggle}`,
					color: `${color}`,
				}}>
				<Router>
					<Nav />
					<Routes>
						<Route
							path="/"
							element={
								<Main
									toggles={toggles}
									toggle={toggle}
									color={color}
								/>
							}
						/>
					</Routes>{" "}
				</Router>
			</div>
		</Context.Provider>
	);
}

export default App;
