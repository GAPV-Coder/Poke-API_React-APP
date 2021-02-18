import React from "react";

export const ErrorMessage = ({ msg }) => (
	<> {msg && <p className="error-msg">{msg}</p>} </>
);
