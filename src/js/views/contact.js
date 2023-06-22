import React from "react";
import { Card } from "../component/card.js";
import { Link } from "react-router-dom";

export const Contact = () => {

  return (
    <div className="container">
      <div className="row mt-3 ms-4">
        <div className="col-10"><h1>Contact List</h1></div>
        <div className="col-2">
          <Link to="/contact">
            <button className="btn btn-success" type="button">
              Add new contact
            </button>
          </Link>
        </div>
      </div>
      <Card/>
    </div>
    
  );
};
