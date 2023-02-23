import React from "react";

const Card = ({ item }) => {
	return (
		<div className="card">
			<div
				className="color"
				style={{ backgroundColor: item.color }}></div>
			<p>
				<strong>{item.color}</strong>
			</p>
			<small>{item.name}</small>
		</div>
	);
};

export default Card;
