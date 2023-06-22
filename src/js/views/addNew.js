import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const AddNew = () => {
  const { actions, store } = useContext(Context);
  const params = useParams()

  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    agenda_slug: "paolita",
    address: "",
    phone: "",
  });

  const [success, setSuccess] = useState(false)

  function findContact() {
		let exists = store.contacts.find((item) => item.id == params.contactId)
		if (exists) {
			setNewContact(
				exists
			)
		}
	}
  
  const handleChange = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await actions.createContact(newContact);
    
    if (response == 200){
      setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 10000);
    }
  };

  useEffect(() => {
		if (params.contactId) {
			findContact()
		}
	}, [])

  return (
    <div className="container mt-4">
      <h1 className="text-center">Add a New Contact</h1>
      { success && <div class="alert alert-success" role="alert">Se ha creado el contacto</div> }
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            type="text"
            name="full_name"
            placeholder="Name"
            value={newContact.full_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            className="form-control"
            type="text"
            name="phone"
            placeholder="Phone"
            value={newContact.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            placeholder="Address"
            value={newContact.address}
            onChange={handleChange}
          />
        </div>
        
        <button className="btn btn-primary col-12" type="submit">
          Save
        </button>
      </form>
      <Link to="/"> or get back to contacts</Link>
    </div>
  );
};