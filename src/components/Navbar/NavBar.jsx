import Content from "../Content/Content";
import "./NavBar.css";
import Data from "../../Store/Data";
import FooterData from "../../Store/FooterData";
import Footer from "../Footer/Footer";
import SideBar from "./SideBar";
import { useState } from "react";

const NavBar = () => {
	const [state, setState] = useState(true);
	const getSideBar = () => {
		setState(!state);
	};
	return (
		<div>
			{state === false && <SideBar getFun={getSideBar} />}

			<nav>
				<div className="logo">
					<img width={125} src="images/logo.png" alt="" />
				</div>
				{state === true && (
					<div className="navButton">
						<a href="Home">Home</a>
						<a href="About">About</a>
						<a href="Project">Project</a>
						<a href="Services" className="service">
							Services
						</a>
						<div className="dropDown">
							<a href=".">building Services</a>
							<a href=".">Fire System</a>
							<a href=".">Fabricated System</a>
						</div>
						<a href="Blog">Blog</a>
						<a href="Contact">Contact</a>
					</div>
				)}
				<div className="buttonContainer">
					<div className="enquireBtn">
						<button>Enquire Now</button>
					</div>
					<div className="burger" onClick={getSideBar}>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
				</div>
			</nav>
			<h1 className="descTitle">Our Projects</h1>
			<div className="projectsCollection">
				{Data.map((e) => {
					return <Content img={e.img} name={e.name} />;
				})}
			</div>
			<div className="footer">
				<div className="footerPadding">
					{FooterData.map((e) => {
						return <Footer data={e} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
