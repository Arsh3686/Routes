import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<div className="logo">
				<img width={50} src="images/logo.png" alt="" />
			</div>
			<div className="nav">
				<Link to="/">Home</Link>
				<Link to="/project">Project</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/services">Services</Link>
				<Link to="/about">About</Link>
			</div>
			<div className="btn"></div>
		</div>
	);
};

export default Nav;
