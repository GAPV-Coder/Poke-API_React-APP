import React from "react";

export const Stats = ({ hp, xp }) => {
	return (
		<span className="stats">
			<small className="hp">HP: {hp}</small>
			<small className="xp">XP: {xp}</small>
		</span>
	);
};
