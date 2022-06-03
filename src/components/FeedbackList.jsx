import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedbacks, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return (
      <p style={{ textAlign: "center" }}>
        No Feedback yet ! Please submit your feedback.
      </p>
    );
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ display: "none", opacity: 0 }}
          >
            <FeedbackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
