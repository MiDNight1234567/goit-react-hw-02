import PropTypes from "prop-types";
import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback = 0, resetFeedback }) => {
  return (
    <ul className={css.buttonsList}>
      <li>
        <button
          className={css.buttonsItem}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.buttonsItem}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.buttonsItem}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button className={css.buttonsItem} onClick={resetFeedback}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

Options.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};

export default Options;
