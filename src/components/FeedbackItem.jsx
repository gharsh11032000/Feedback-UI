import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropType from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feedback }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className="close">
        <FaTimes color="rebeccapurple" />
      </button>
      <button onClick={() => editFeedback(feedback)} className="edit">
        <FaEdit color="rebeccapurple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropType.object.isRequired,
};

export default FeedbackItem;
