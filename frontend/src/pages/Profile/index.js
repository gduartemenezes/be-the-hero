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

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ngoId,
        },
      });

      setIncidents(incidents.filter((el) => el.id !== id));
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo" />
        <span>Welcome, {ngoName}</span>
        <Link className="btn btn-add" to="/incidents/new">
          Add case
        </Link>
        <button className="btn-power" onClick={handleLogout}>
          <FiPower />
        </button>
      </header>

      <section className="bottom">
        <h1>Active cases</h1>
        <ul>
          {incidents.map((el) => (
            <li key={el.id}>
              <button
                className="btn-delete"
                onClick={() => handleDeleteIncident(el.id)}
              >
                <FiTrash2 />
              </button>
              <strong>Case:</strong>
              <p>{el.title}</p>
              <strong>Description:</strong>
              <p>{el.description}</p>
              <strong>Value:</strong>
              <p>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(el.value)}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
