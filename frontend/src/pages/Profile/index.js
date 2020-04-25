import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.png";
import { FiPower, FiTrash2 } from "react-icons/fi";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo" />
        <span>Welcome, NGO</span>
        <button className="btn btn-add"> Add case</button>
        <button className="btn-power">
          <FiPower color="red" />
        </button>
      </header>

      <section className="bottom">
        <h1>Active cases</h1>
        <ul>
          <li>
            <button className="btn-delete">
              <FiTrash2 />
            </button>
            <strong>Case:</strong>
            <p>Case title</p>
            <strong>Description:</strong>
            <p>
              Case Description Case Description Case Description Case
              Description Case Description Case Description
            </p>
            <strong>Value:</strong>
            <p>R$120.00</p>
          </li>
          <li>
            <button className="btn-delete">
              <FiTrash2 size={18} />
            </button>
            <strong>Case:</strong>
            <p>Case title</p>
            <strong>Description:</strong>
            <p>
              Case Description Case Description Case Description Case
              Description Case Description Case Description
            </p>
            <strong>Value:</strong>
            <p>R$120.00</p>
          </li>
          <li>
            <button className="btn-delete">
              <FiTrash2 />
            </button>
            <strong>Case:</strong>
            <p>Case title</p>
            <strong>Description:</strong>
            <p>
              Case Description Case Description Case Description Case
              Description Case Description Case Description
            </p>
            <strong>Value:</strong>
            <p>R$120.00</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
