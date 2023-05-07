import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";

export default function Pokemon({ pokemonURL }): ReactElement {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios.get(pokemonURL).then((response) => {
      setPokemon(response.data), console.log(response.data);
    });
  }, []);

  if (pokemon === null) {
    return (
      <div className="col">
        <div className="card" aria-hidden="true">
          <div className="row g-0">
            <div className="col-md-4 grey">
              <img
                src=""
                className="img-fluid rounded-start mx-auto my-auto d-block hidden"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <div className="card-text placeholder-glow">
                  <div>
                    <span className="placeholder col-1 me-1"></span>
                    <span className="placeholder col-6"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4 grey">
              <img
                src={pokemon.sprites.front_default}
                className="img-fluid rounded-start mx-auto my-auto d-block"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h5>
                <i className="bi bi-stars mx-2"></i>
                <span className="ms-1">XP: {pokemon.base_experience}</span>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
