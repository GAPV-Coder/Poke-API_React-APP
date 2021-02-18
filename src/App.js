import React, { useState, useEffect } from "react";
import { ErrorMessage } from "./components/errorMessage";
import { SearchInput } from "./components/searchInput";
import { Filters } from "./components/filter";
import { PokeCard } from "./components/card";

function App() {
	const API_LINK = "https://pokeapi.co/api/v2/",
		[value, setValue] = useState(""),
		[query, setQuery] = useState(""),
		[amount, setAmount] = useState("10"),
		[check, setCheck] = useState(false),
		[errorMsg, setErrorMsg] = useState(""),
		[onePoke, setOnePoke] = useState([]),
		[pokes, setPokes] = useState([]);

	useEffect(() => {
		const getPokemonName = async (query) => {
				await fetch(`${API_LINK}pokemon/${query}`)
					.then((response) =>
						response.ok ? response.json() : Promise.reject(response)
					)
					.then((data) => setOnePoke([data]))
					.catch((error) =>
						error.status === 404
							? setErrorMsg("No results found with that pokemon name or id")
							: console.error(error)
					);
			},
			getPokemonType = async (query) => {
				await fetch(`${API_LINK}type/${query}`)
					.then((response) =>
						response.ok ? response.json() : Promise.reject(response)
					)
					.then((data) => setPokes(data.pokemon.slice(0, amount)))
					.catch((error) =>
						error.status === 404
							? setErrorMsg("No results found with that type of pokemon or id")
							: console.error(error)
					);
			};

		if (query !== "") {
			if (check) {
				getPokemonType(query);
				setOnePoke([]);
			} else {
				getPokemonName(query);
				setPokes([]);
			}
		}
	}, [amount, check, query]);

	const handleSubmit = (e) => {
			e.preventDefault();
			setQuery(value);
			e.target[0].value = "";
		},
		getValue = (e) => {
			setValue(e.target.value.toLowerCase());
			setErrorMsg("");
		},
		getAmount = (e) => {
			setAmount(e.target.value);
			setErrorMsg("");
		},
		handleCheck = () => {
			setCheck(!check);
			setErrorMsg("");
		},
		arrPokes = pokes.map((poke, index) => (
			<PokeCard
				key={index + 1}
				name={poke.pokemon.name}
				url={poke.pokemon.url}
			/>
		)),
		arrPoke = onePoke.map((poke, index) => (
			<PokeCard
				key={index + 1}
				name={poke.name}
				url={`${API_LINK}pokemon/${poke.id}`}
			/>
		));

	return (
		<div className="PokeApp">
			<h1>Pokemon API</h1>

			<ErrorMessage msg={errorMsg} />

			<form onSubmit={handleSubmit}>
				<SearchInput value={getValue} check={check} />
				<Filters handleCheck={handleCheck} check={check} amount={getAmount} />
			</form>

			<div className="poke-container">
				{onePoke.length > 0 && arrPoke}
				{pokes.length > 0 && arrPokes}
			</div>
		</div>
	);
}

export default App;
