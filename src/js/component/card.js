import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Card = () => {
    const { store, actions } = useContext(Context);

    const deleteContact = (id) => {
    actions.deleteContact(id);
    };
    return (
    <>
      <div>
        
        <ul>
          {store.contacts.map((contact) => (
            <div className="card" key={contact.id}>
              <div className="row">
                <div className="col-2 p-3">
                  <img
                    src="https://i.pinimg.com/originals/46/5f/a6/465fa638a21ff0858d5fe157aaf53018.jpg"
                    className="img-fluid rounded-circle"
                    alt="Contact"
                  />
                </div>
                <div className="col-8 p-4">
                  <h3>{contact.full_name}</h3>
                  <p>{contact.email}</p>
                  <p>{contact.phone}</p>
                  <p>{contact.address}</p>
                </div>
                <div className="col-2  mt-4">
                  <Link to={`/contact/${contact.id}`} >
                      <i className="fa-solid fa-pencil fa-lg"></i>
                    </Link>
				          <i onClick={() => deleteContact(contact.id)} className="fa-solid fa-trash fa-lg puntero ms-4"></i>
				        </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};