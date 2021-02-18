import React from "react";

export const Filters = ({ handleCheck, check, amount }) => {
	return (
		<>
			<div className="form-group">
				<input id="checkbox" type="checkbox" onClick={handleCheck}></input>
				<label htmlFor="checkbox" className="check">
					<small>filtter for type </small>
				</label>
			</div>
			{check && (
				<div className="form-group">
					<div className="select">
						<select onChange={amount} type="select">
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="30">30</option>
							<option value="50">50</option>
						</select>
					</div>
				</div>
			)}
		</>
	);
};
