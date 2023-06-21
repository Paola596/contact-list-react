import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import { Contacts } from "./views/contacts";
import { AddNew } from "./views/addNew";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/contact-detail/:id" element={<Contacts />} />
						<Route path="/" element={<AddNew />} />
						<Route path="*" element={<h1>404 Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
