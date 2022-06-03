import PropType from "prop-types";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.protoTypes = {
  children: PropType.node.isRequired,
  reverse: PropType.bool,
};

export default Card;
