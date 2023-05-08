import React, { ReactElement } from "react";

export default function Card(): ReactElement {
  return (
    <footer className="border-top text-center py-3">
      <i className="bi bi-bookmark-check-fill me-2 text-red"></i>
      Made by{" "}
      <span
        className="fw-bold github"
        onClick={() => (location.href = "https://github.com/caio-farias21")}
      >
        Caio Farias
      </span>
    </footer>
  );
}
