import './Feedback.css';

export default function Feedback({ good, neutral, bad }) {
  return (
    <>
        <div className="Feedback">
            <h2>Please leav feedback</h2>
         <button type="button" className="Feedback_button">Good</button>
            <button type="button" className="Feedback_button">Neutral</button>
            <button type="button" className="Feedback_button">Bad</button>
            <h2>Statistics</h2>
            <p>Good: { good }</p>
            <p>Neutral: { neutral }</p>
            <p>Bad: {bad}</p>
      </div>
    </>
  );
}
