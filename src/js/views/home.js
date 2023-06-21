import React from "react";

// import "../../styles/home.css";

export const Home = () => {


	return (
		<div className= container>
			<div className="mb-3">
				<label for="fullName" class="form-label">Full Name</label>
				<input type="text" class="form-control" id="fullName" placeholder="Name LastName">
			</div>
			<div className="mb-3">
				<label for="email" class="form-label">Email address</label>
				<input type="email" class="form-control" id="email" placeholder="name@example.com">
			</div>
			<div className="mb-3">
				<label for="phone" class="form-label">Phone Number</label>
				<input type="text" class="form-control" id="phone" placeholder="xxxx-xxx-xx-xx">
			</div>
			<div className="mb-3">
				<label for="adress" class="form-label">Address</label>
				<input type="text" class="form-control" id="adress" placeholder="City, Country">
			</div>
		</div>
	);
}
