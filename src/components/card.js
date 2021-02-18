import React, { useState, useEffect } from "react";
import { Icon } from "./icons";
import { Image } from "./images";
import { Info } from "./information";
import { background, typeBackground } from "../helpers/background";

export const PokeCard = ({ name, url }) => {
	const [poke, setPoke] = useState(null),
		[pokeData, setPokeData] = useState({});

	useEffect(() => {
		fetch(url)
			.then((response) =>
				response.ok ? response.json() : Promise.reject(response)
			)
			.then((data) => setPoke(data))
			.catch((error) => console.error(error));
	}, [url]);

	useEffect(() => {
		if (poke !== null) {
			const id = poke.id.toString().padStart(3, "0"),
				poke_types = poke.types.map((type) => type.type.name),
				type = typeBackground.find((type) => poke_types.indexOf(type) > -1),
				color = background[type],
				hp = `${Math.floor(Math.random() * poke.stats[0].base_stat + 1)}/${
					poke.stats[0].base_stat
				}`,
				xp = poke.base_experience,
				w = poke.weight,
				weight =
					Math.abs(w) > 10
						? Math.sign(w) * (Math.abs(w) / 10).toFixed(1)
						: Math.sign(w) * Math.abs(w),
				h = Number(poke.height + "0"),
				height =
					Math.abs(h) > 10
						? Math.sign(h) * (Math.abs(h) / 100).toFixed(1)
						: Math.sign(h) * Math.abs(h),
				types = poke_types.map((type) => type).join(" / "),
				icon = `./img/${type}.svg`,
				image = `https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`;

			setPokeData({
				id,
				type,
				color,
				hp,
				xp,
				weight,
				height,
				types,
				icon,
				image,
			});
		}
	}, [poke]);

	const {
		id,
		icon,
		image,
		hp,
		xp,
		types,
		type,
		weight,
		height,
		color,
	} = pokeData;

	return (
		<div className="pokemon" style={{ backgroundColor: `${color}` }}>
			<Icon icon={icon} name={type} />

			<Image image={image} name={name} />

			<Info
				id={id}
				name={name}
				hp={hp}
				xp={xp}
				types={types}
				weight={weight}
				height={height}
			/>
		</div>
	);
};
