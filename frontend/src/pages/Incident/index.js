//dependencies
import React from "react";
import { Link } from "react-router-dom";
//frontend styling
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo.png";

export default function CreateIncident() {
  return (
    <div className="incident-container">
      <section className="static">
        <img src={logo} alt="Logo" />
        <h1>Create a new case</h1>
        <p>Describe it with details. This way our heroes can help you better</p>
        <Link className="link">
          <FiArrowLeft /> Back to Profile page
        </Link>
      </section>

      <section className="form">
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Value" />
          <button className="btn btn-register" type="submit">
            Add case
          </button>
        </form>
      </section>
    </div>
  );
}
