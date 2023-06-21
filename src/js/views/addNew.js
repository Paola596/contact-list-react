import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// import "../../styles/demo.css";

export const AddNew = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="card mb-3" style="width: 18rem;">
			<Link to="#" class="btn btn-primary">Add New Contact</Link>
			<div className="card-body">
			    <img src="..." class="card-img-top" alt="...">
				<h5 className="card-title">Special title treatment</h5>
				<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
			</div>
		</div>
	);
};
