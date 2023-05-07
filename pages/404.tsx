import React, { ReactElement } from "react";
import Footer from "../components/Footer";

export default function Card(): ReactElement {
  return (
    <>
      <div className="container my-5">
        <div style={{ color: "#423b3b" }}>
          <h1>Opa!</h1>
          <h3>
            Parece que não existem Poke
            <span style={{ color: "#ff6b57" }}>mons</span> por aqui... 😢
          </h3>
        </div>
        <button
          className="btn btn-secondary me-2 my-3"
          onClick={() => (location.href = "/")}
        >
          <i className="bi bi-house-door-fill"></i>
          <span className="ms-2">Página Inicial</span>
        </button>
      </div>
      <Footer />
    </>
  );
}
