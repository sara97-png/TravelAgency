import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false); //defaultno stanje

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <span className="plane">✈</span>
          TRAVEL AGENCY
        </div>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen(!open)} //suprotno od trenutnog stanja
        >
          ☲
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Naslovnica
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            O nama
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kontakt
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kategorije
          </NavLink>

          <NavLink
            to="/tours"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Izleti
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            F.A.Q.
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
