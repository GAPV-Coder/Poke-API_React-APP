export const Description = ({ types, weight, height }) => {
	return (
		<span className="features">
			<span className="item">
				<span className="value">{types}</span>
				<small className="title">Types</small>
			</span>
			<span className="item">
				<span className="value">{weight} kg</span>
				<small className="title">Weight</small>
			</span>
			<span className="item">
				<span className="value">{height} m</span>
				<small className="title">Height</small>
			</span>
		</span>
	);
};
