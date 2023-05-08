import Pokemon from "../../components/Pokemon";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MenuButton from "../../components/MenuButton";

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
        <Navbar />
        <div className="mt-2 mb-5 mx-auto justify-content-center justify-content-md-start row">
          <MenuButton
            iconClass={"bi-arrow-left"}
            href={"/"}
            buttonValue={"Página Anterior"}
          />
          <MenuButton
            iconClass={"bi-arrow-clockwise"}
            href={"/six-random"}
            buttonValue={"Atualizar"}
          />
        </div>
        <div
          className="row row-cols-1 row-cols-md-3 g-5 mx-auto justify-content-between"
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
