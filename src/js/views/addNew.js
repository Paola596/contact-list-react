import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

export const AddNew = () => {
	const {actions, store} = useContext(Context)

	useEffect(()=> {
		actions.handleFetch()
	},[])
	
	// return(
	// 	// <div className=container>
	// 	// 	{/* <div className="row mb-3">
	// 	// 		<label for="fullName" className="form-label">Full Name</label>
	// 	// 		<input type="text" onChange={(e) => setNameValue({...nameValue, [e.target.name]: e.target.value})} 
	// 	// 		value = {nameValue.label} name = "fullName" placeholder="Name LastName"/>
	// 	// 	</div>
	// 	// 	<div className="row mb-3">
	// 	// 		<label for="email" className="form-label">Email address</label>
	// 	// 		<input type="text" onChange={(e) => setEmailValue({...emailValue, [e.target.name]: e.target.value})} 
	// 	// 		value = {emailValue.label} name = "email" placeholder="example@email.com"/>
	// 	// 	</div>
	// 	// 	<div className="row mb-3">
	// 	// 		<label for="phone" className="form-label">Phone Number</label>
	// 	// 		<input type="text" onChange={(e) => setNumberValue({...numberValue, [e.target.name]: e.target.value})} 
	// 	// 		value = {numberValue.label} name = "phone" placeholder="0123-4567890"/>
	// 	// 	</div>
	// 	// 	<div className="row mb-3">
	// 	// 		<label for="address" className="form-label">Address</label>
	// 	// 		<input type="text" onChange={(e) => setAddressValue({...addressValue, [e.target.name]: e.target.value})} 
	// 	// 		value = {addressValue.label} name = "address" placeholder="City, Country"/>
	// 	// 	</div>
	// 	// 	<div class="row d-grid gap-2">
	// 	// 		<button className="btn btn-primary" type="button">Save</button>
	// 	// 	</div> */}
	// 	// 	<Link to= {'/contact-detail/${oneContact.id}'}>or get back to contacts</Link>
	// 	// </div>
	// );
}
