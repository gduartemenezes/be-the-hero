import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.png";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ngoName = localStorage.getItem("ngoName");
  const ngoId = localStorage.getItem("ngoId");

  const history = useHistory();

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ngoId,
        },
      })
      .then((res) => {
        console.log(res);
        setIncidents(res.data.ngoIncidents);
      });
  }, [ngoId]);

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo" />
        <span>Welcome, {ngoName}</span>
        <Link className="btn btn-add" to="/incidents/new">
          Add case
        </Link>
        <button className="btn-power">
          <FiPower color="red" />
        </button>
      </header>

      <section className="bottom">
        <h1>Active cases</h1>
        <ul>
          {incidents.map((el) => (
            <li key={el.id}>
              <button className="btn-delete">
                <FiTrash2 />
              </button>
              <strong>Case:</strong>
              <p>{el.title}</p>
              <strong>Description:</strong>
              <p>{el.description}</p>
              <strong>Value:</strong>
              <p>{el.value}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
