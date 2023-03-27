import React from "react";
import "./Contact.css";

const Contacts = ({ contacts }) => {
  return (
    <div className="contact-container">
      {contacts.map((contact) => (
        <div key={contact.id} className="card-contact">
          <img className="card-image" src={contact.photo} alt={contact.name} />
          <div className="card-details">
            <h2 className="card-name">{contact.name}</h2>
            <p className="card-phone">Phone: {contact.phone}</p>
            <p className="card-email">Email: {contact.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;