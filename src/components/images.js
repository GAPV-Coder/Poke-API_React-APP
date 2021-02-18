import React from "react";

export const Image = ({ image, name }) => {
	return (
		<div className="img-container">
			<img src={image} alt={name} />
		</div>
	);
};
