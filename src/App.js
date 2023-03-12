import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Services from "./components/Services";

const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
