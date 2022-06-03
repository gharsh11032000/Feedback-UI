import loader from "../assets/spin.gif";

function Spinner() {
  return (
    <img
      src={loader}
      alt="Loading..."
      style={{ display: "block", width: "100px", margin: "auto" }}
    />
  );
}

export default Spinner;
