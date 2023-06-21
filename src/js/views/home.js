import React, {useEffect, useState, useContext} from "react";
import {Context} from "../store/appContext.js"
import { Link } from "react-router-dom";
import {useParams} from "react-router"

export const Home = () => {
	const params = useParams()

	return (
		<div className="card mb-3" style="width: 18rem;">
			<Link to={} class="btn btn-primary">Add New Contact </Link>
			<div className="card-body">
			    <img src="..." class="card-img-top" alt="...">
				<h5 className="card-title">Special title treatment</h5>
				<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
			</div>
		</div>
	);
}
