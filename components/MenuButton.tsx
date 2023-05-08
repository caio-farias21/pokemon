export default function MenuButton({ iconClass, href, buttonValue }) {
  return (
    <button
      className="btn btn-secondary mx-1 col col-md-auto"
      onClick={() => (location.href = href)}
    >
      <i className={"bi " + iconClass}></i>
      <span className="ms-2">{buttonValue}</span>
    </button>
  );
}
