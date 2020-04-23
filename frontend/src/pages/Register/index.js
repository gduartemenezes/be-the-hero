import React from "react";
import {} from "react-icons/fi";

import "./styles.css";
import logo from "../../assets/logo.png";

export default function Register() {
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
      </section>
      <section className="form">
        <form>
          <input type="text" placeholder="NGO name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Whatsapp" />
          <input type="text" placeholder="City" />
          <button className="btn btn-register" type="submit">
            Register.
          </button>
        </form>
      </section>
    </div>
  );
}
