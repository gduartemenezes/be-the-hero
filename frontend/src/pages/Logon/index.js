import React from "react";

//Frontend assets
import "./styles.css";
import heroImg from "../../assets/heroes.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

export default function Logon() {
  return (
    <div className="container-logon">
      <section className="form">
        <img src={logo} className="logo" alt="Be the hero logo" />
        <form>
          <h1>Access you account.</h1>
          <input type="text" placeholder="Your ID" />
          <button type="submit" className="btn btn-register">
            Log in
          </button>
          <Link className="link" to="/register ">
            <FiLogIn size={16} />
            Create Account
          </Link>
        </form>
      </section>
      <img src={heroImg} className="heroes" alt="Be the Hero" />
    </div>
  );
}
