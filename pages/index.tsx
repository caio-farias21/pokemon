import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuButton from "../components/MenuButton";

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
        <Navbar />
        <div className="mt-2 mb-5 mx-auto justify-content-center justify-content-md-start row">
          <MenuButton
            iconClass={"bi-6-square"}
            href={"/six-random"}
            buttonValue={"Seis Pokémons Aleatórios"}
          />
        </div>
        <div
          className="row row-cols-1 row-cols-md-3 g-5 mx-auto justify-content-between"
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
