import React, { useEffect, useState } from "react";

const Content = ({ e }) => {
	const [color, setColor] = useState("#21BF73");

	return (
		<div
			style={{
				height: "120px",
				backgroundColor:
					(e.details === "prime" && "#FD5E53") ||
					(e.details === "odd" && "#FDDB3A") ||
					(e.details === "even" && "#21BF73"),
			}}>
			{e.id}
		</div>
	);
};

export default Content;
