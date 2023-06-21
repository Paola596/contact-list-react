import React, {useEffect, useState, useContext} from "react";
import {Context} from "../store/appContext.js"
import { Link } from "react-router-dom";
import {useParams} from "react-router"

export const Contacts = () => {
	const params = useParams()

	return (
		<div className="container">
			{StorageEvent.contact.map((oneContact)=>{

			return(
			<div key={oneContact.id} className="card mb-3" style="width: 18rem;">
				<Link to={'/'} class="btn btn-primary">Add New Contact</Link>
				<div className="card-body">
					<img src="..." class="card-img-top" alt="..."/>
					<h4 className="card-title">{oneContact.fullName}</h4>
					<p className="card-text">{oneContact.email}</p>
					<p className="card-text">{oneContact.phoneNumber}</p>
					<p className="card-text">{oneContact.address}</p>
				</div>
			</div>
			)
			})}
		</div>
	);
}
