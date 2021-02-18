import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchInput = ({ value, check }) => {
	return (
		<div className="form-group">
			<label className="input">
				<input
					type="search"
					onChange={value}
					placeholder={
						check ? "Write type, name or id" : "Write pokemon name or id"
					}
				/>
				<FontAwesomeIcon icon={["fas", "search"]}>
					<span className="search-icon"></span>
				</FontAwesomeIcon>
			</label>
		</div>
	);
};
