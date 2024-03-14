import PropTypes from "prop-types";
import css from "./Feedback.module.css";
const Feedback = ({
  states: { good = 0, neutral = 0, bad = 0 },
  totalFeedback = 0,
  positiveFeedback = 0,
}) => {
  return (
    <>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>
          Good: <span className={css.feedbackSpan}>{good}</span>
        </li>
        <li className={css.feedbackItem}>
          Neutral: <span className={css.feedbackSpan}>{neutral}</span>
        </li>
        <li className={css.feedbackItem}>
          Bad: <span className={css.feedbackSpan}>{bad}</span>
        </li>
        <li className={css.feedbackItem}>
          Total: <span className={css.feedbackSpan}>{totalFeedback}</span>
        </li>
        <li className={css.feedbackItem}>
          Positive:{" "}
          <span className={css.feedbackSpan}>{positiveFeedback}%</span>
        </li>
      </ul>
    </>
  );
};

Feedback.propTypes = {
  states: PropTypes.object,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
