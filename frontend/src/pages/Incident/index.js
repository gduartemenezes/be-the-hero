//dependencies
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

//frontend styling
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo.png";

export default function CreateIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const ngoId = localStorage.getItem("ngoId");

  const history = useHistory();

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ngoId,
        },
      });

      history.push("/profile");
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }

  return (
    <div className="incident-container">
      <section className="static">
        <img src={logo} alt="Logo" />
        <h1>Create a new case</h1>
        <p>Describe it with details. This way our heroes can help you better</p>
        <Link className="link" to="/profile">
          <FiArrowLeft /> Back to Profile page
        </Link>
      </section>

      <section className="form">
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            type="textarea"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className="btn btn-register" type="submit">
            Add case
          </button>
        </form>
      </section>
    </div>
  );
}
