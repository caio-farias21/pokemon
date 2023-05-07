import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";

export default function Pokemon({ pokemonURL }): ReactElement {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios.get(pokemonURL).then((response) => setPokemon(response.data));
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
                  <div className="mb-3">
                    <span className="placeholder col-1 me-1"></span>
                    <span className="placeholder col-6"></span>
                  </div>
                  <div>
                    <span className="placeholder col-1 me-1"></span>
                    <span className="placeholder col-4"></span>
                  </div>
                  <div>
                    <span className="placeholder col-1 me-1"></span>
                    <span className="placeholder col-5"></span>
                  </div>
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
            <div className="col-md-4 grey align-items-center row m-0">
              <div className="col">
                <img
                  src={pokemon.sprites.front_default}
                  className="img-fluid rounded-start mx-auto d-block col"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h5>
                <div className="mb-3">
                  <i className="bi bi-stars mx-2"></i>
                  <span className="ms-1">XP: {pokemon.base_experience}</span>
                </div>
                <div>
                  <i className="bi bi-heart-fill mx-2"></i>
                  <span className="ms-1">HP: {pokemon.stats[0].base_stat}</span>
                </div>
                <div>
                  <i className="bi bi-heart-half mx-2"></i>
                  <span className="ms-1">
                    Attack: {pokemon.stats[1].base_stat}
                  </span>
                </div>
                <div>
                  <i className="bi bi-shield-fill mx-2"></i>
                  <span className="ms-1">
                    Defense: {pokemon.stats[2].base_stat}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
