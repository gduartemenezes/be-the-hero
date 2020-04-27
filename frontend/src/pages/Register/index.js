import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
    };

    try {
      const res = await api.post("ngos", data);

      alert(`Your access ID is: ${res.data.id}`);

      history.push("/");
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }
  return (
    <div className="register-container">
      <section className="static">
        <img src={logo} alt="logo" className="logo" />
        <h1>Register</h1>
        <p>
          Create your account.
          <br />
          Joining the platform you get closer to volunteers, also known as
          Heroes.
        </p>
        <Link className="link" to="/">
          <FiArrowLeft /> Back to HomePage
        </Link>
      </section>
      <section className="form">
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="NGO name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <button className="btn btn-register" type="submit">
            Register.
          </button>
        </form>
      </section>
    </div>
  );
}
