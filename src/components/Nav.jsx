import "./style/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="flex">
			<Link to="/" className="logo">
				<img width={100} src="images/logo.png" alt="" />
			</Link>
			<div className="nav">
				<Link className="none" to="/">
					Home
				</Link>
				<Link className="none" to="/about">
					About
				</Link>
				<Link className="none" to="/project">
					Project
				</Link>
				<div className="services">
					<span>Servies</span>
					<div className="dropDown">
						<p>Building Services</p>
						<p>File System</p>
						<p>Fabricated</p>
					</div>
				</div>

				<Link className="none" to="/contact">
					Contact
				</Link>
			</div>
			<div className="btn">
				<button>Enquire Now</button>
			</div>
		</div>
	);
};

export default Nav;
