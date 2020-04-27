import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

//Frontend assets
import "./styles.css";
import heroImg from "../../assets/heroes.png";
import logo from "../../assets/logo.png";
import { FiLogIn } from "react-icons/fi";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const res = await api.post("session", { id });

      localStorage.setItem("ngoId", id);
      localStorage.setItem("ngoName", res.data.ngo.name);

      history.push("/profile");
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }

  return (
    <div className="container-logon">
      <section className="form">
        <img src={logo} className="logo" alt="Be the hero logo" />
        <form onSubmit={handleLogin}>
          <h1>Access you account.</h1>
          <input
            type="text"
            placeholder="Your ID"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <button type="submit" className="btn btn-register">
            Log in
          </button>
        </form>
        <Link className="link" to="/register">
          <FiLogIn size={16} />
          Create Account
        </Link>
      </section>
      <img src={heroImg} className="heroes" alt="Be the Hero" />
    </div>
  );
}
