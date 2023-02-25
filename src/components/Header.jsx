import React from "react";

const Header = ({ update, mode }) => {
	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "space-around",
				paddingTop: "30px",
			}}>
			<div className="toggler">Toggler</div>
			<button
				style={{
					cursor: "pointer",
					border: 0,
					borderRadius: "3px",
					backgroundColor: mode === true ? "white" : "violet",
					color: mode === true ? "black" : "black",
				}}
				onClick={() => update()}>
				Toggle
			</button>
		</nav>
	);
};

export default Header;
