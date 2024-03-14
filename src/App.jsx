import "./App.css";
import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbackStates, setFeedbackStates] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback-states");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback =
    feedbackStates.good + feedbackStates.neutral + feedbackStates.bad;

  const positiveFeedback =
    totalFeedback > 0
      ? Math.round(
          ((feedbackStates.good + feedbackStates.neutral) / totalFeedback) * 100
        )
      : 0;

  useEffect(() => {
    window.localStorage.setItem(
      "feedback-states",
      JSON.stringify(feedbackStates)
    );
  }, [feedbackStates]);

  const updateFeedback = (feedbackType) => {
    setFeedbackStates((prevFeedbackStates) => ({
      ...prevFeedbackStates,
      [feedbackType]: prevFeedbackStates[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackStates({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          states={feedbackStates}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
