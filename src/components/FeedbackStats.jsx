import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);
  //Calc Avg Rating
  const average = Math.round(
    feedbacks.reduce((acc, { rating }) => acc + rating, 0) / feedbacks.length
  );

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
