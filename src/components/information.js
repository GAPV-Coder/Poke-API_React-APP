import React from "react";
import { Stats } from "./stats";
import { Description } from "./description";

export const Info = ({ id, name, hp, xp, types, weight, height }) => {
	return (
		<div className="info">
			<span className="number">#{id}</span>

			<h3 className="name">{name}</h3>

			<Stats hp={hp} xp={xp} />

			<Description types={types} weight={weight} height={height} />
		</div>
	);
};
