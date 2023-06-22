import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Contact } from "./views/contact";
import { AddNew } from "./views/addNew";

import injectContext from "./store/appContext";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Contact />} />
						<Route path="/contact" element={<AddNew />} />
						<Route path="/contact/:contactId" element={<AddNew />} />
					    <Route path="*" element={<h1>404 Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
