import React from "react";
const Spinner = () => {
	return (
		<div className="align-items-center d-flex justify-content-center">
			<span
				className="spinner-border text-primary mr-2"
				role="status"
			></span>
			<h5 className="mb-0">Loading...</h5>
		</div>
	);
};
export default Spinner;
