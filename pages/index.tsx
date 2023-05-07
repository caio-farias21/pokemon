import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import Footer from "../components/Footer";

export default function Home() {
  const [object, setObject] = useState([]);
  const maxPokemons = 15;
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`;

  useEffect(() => {
    axios.get(endpoint).then((response) => {
      const arr = [...response.data.results].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setObject(arr);
    });
  }, []);

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center text-md-start">
          <img
            src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_1280.png"
            className="me-3"
            width={50}
            alt="pokeball"
          />
          <span className="align-middle">
            <span style={{ color: "#423b3b" }}>Poké</span>
            <span style={{ color: "#ff6b57" }}>mon</span>
          </span>
        </h1>
        <hr />
        <div className="mt-2 mb-5 justify-content-start justify-content-between-md">
          <button
            className="btn btn-secondary"
            onClick={() => (location.href = "/six-random")}
          >
            <i className="bi bi-6-square"></i>
            <span className="ms-2">Seis Pokémons Aleatórios</span>
          </button>
        </div>
        <div
          className="row row-cols-1 row-cols-md-3 g-5 justify-content-between"
          id="pokemons"
        >
          {object.map((pokemon) => (
            <Pokemon pokemonURL={pokemon.url} key={pokemon.name} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
