import { useState } from "react";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      };

      handleAdd(newFeedback);

      setText("");
    }
  };

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              type="text"
              onChange={handleTextChange}
              placeholder="Write a review"
              value={text}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </div>
    </>
  );
}

export default FeedbackForm;
