import PropTypes from "prop-types";

function Header({ titleText, bgColor, colorText }) {
  const styles = {
    backgroundColor: bgColor,
    color: colorText,
  };

  return (
    <header style={styles}>
      <div className="container">
        <h2>{titleText}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  titleText: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  colorText: "#ff6a95",
};

Header.propTypes = {
  titleText: PropTypes.string,
  bgColor: PropTypes.string,
  colorText: PropTypes.string,
};

export default Header;
