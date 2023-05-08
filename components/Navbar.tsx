export default function Navbar() {
  return (
    <>
      <h1 className="text-center text-md-start">
        <img
          src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_1280.png"
          className="me-3"
          width={50}
          alt="pokeball"
        />
        <span className="align-middle">
          <span className="text-mid-dark">Poké</span>
          <span className="text-mid-red">mon</span>
        </span>
      </h1>
      <hr />
    </>
  );
}
