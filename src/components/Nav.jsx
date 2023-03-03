import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<Link className="link" to={"/Geekster"}>
				Geekster
			</Link>
			<Link className="link" to={"/"}>
				Home
			</Link>
			<Link className="link" to={"/Contact"}>
				Contact
			</Link>
			<Link className="link" to={"/Service"}>
				Service
			</Link>
		</div>
	);
};

export default Nav;
