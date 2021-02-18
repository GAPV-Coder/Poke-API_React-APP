import React from "react";

export const Icon = ({ icon, name }) => {
	return (
		<div className="icons">
			<div className="content-icon"></div>
			<div className="content-icon">
				<img src={icon} alt={name} />
			</div>
		</div>
	);
};
