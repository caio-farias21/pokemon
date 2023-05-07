import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "../../components/Pokemon";
import Footer from "../../components/Footer";

export default function Home() {
  const HOW_MANY_POKEMONS = 1015;
  const values = randomNumbers(HOW_MANY_POKEMONS, 6);
  const endpoint = `https://pokeapi.co/api/v2/pokemon/`;

  function randomNumbers(range, n) {
    if (n < 0 || n > range) {
      return null;
    }

    let numbers = [];

    //Generate n different random numbers
    for (let i = 0; i < n; i++) {
      let number = Math.floor(Math.random() * range);
      let idx = numbers.indexOf(number);

      //If number isn't on array, push it
      if (idx == -1) {
        numbers.push(number);
      }
      //If number is on array, take the successor
      else {
        for (let i = 1; i < range; i++) {
          if (numbers.indexOf((number + i) % range) == -1) {
            numbers.push((number + i) % range);
            break;
          }
        }
      }
    }

    return numbers;
  }
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
            <span style={{ color: "#423b3b" }}>Poke</span>
            <span style={{ color: "#ff6b57" }}>mon</span>
          </span>
        </h1>
        <hr />
        <div className="mt-2 mb-5">
          <button
            className="btn btn-secondary mx-2"
            onClick={() => (location.href = "/")}
          >
            <i className="bi bi-arrow-left"></i>
            <span className="ms-2">Previous Page</span>
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => (location.href = "/six-random")}
          >
            <i className="bi bi-arrow-clockwise"></i>
            <span className="ms-2">Refresh</span>
          </button>
        </div>
        <div
          className="row row-cols-1 row-cols-md-3 g-5 justify-content-between"
          id="pokemons"
        >
          {values.map((value) => (
            <Pokemon pokemonURL={endpoint + value} key={value} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
