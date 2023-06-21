import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const AddNew = () => {
	const {actions, store} = useContext(Context)

	useEffect(()=> {
		actions.handleFetch()
	},[])
}
	return (
		<div className= container>
		<div className="mb-3">
			<label for="fullName" className="form-label">Full Name</label>
			<input type="text" className="form-control" id="fullName" placeholder="Name LastName">
		</div>
		<div className="mb-3">
			<label for="email" className="form-label">Email address</label>
			<input type="email" className="form-control" id="email" placeholder="name@example.com">
		</div>
		<div className="mb-3">
			<label for="phone" className="form-label">Phone Number</label>
			<input type="text" className="form-control" id="phone" placeholder="xxxx-xxx-xx-xx">
		</div>
		<div className="mb-3">
			<label for="adress" className="form-label">Address</label>
			<input type="text" className="form-control" id="adress" placeholder="City, Country">
		</div>
		<div class="d-grid gap-2">
			<button className="btn btn-primary" type="button">Button</button>
		</div>
	</div>
	<Link to= {}>or get back to contacts</Link>
	);
};
