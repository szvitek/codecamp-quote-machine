import PropTypes from "prop-types";

const QuoteComponent = (props) => {
  return (
    <div id="quote-box" className="card">
      <div className="card-body">
        <p className="card-text text-primary" id="text">
          <i className="bi bi-quote"></i>
          {props.quote.text}
          <i className="bi bi-quote flip"></i>
        </p>
        <p className="card-text text-info" id="author">
          — {props.quote.author || "Unknown"}
        </p>
      </div>
      <hr />
      <div className="card-body buttons">
        <a
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${props.quote.text}" ${props.quote.author}`}
          id="tweet-quote"
          className="btn btn-secondary text-primary"
        >
          <i className="bi-twitter"></i>
        </a>

        <button
          id="new-quote"
          className="btn btn-primary"
          onClick={() => props.generateRandomQuote()}
        >
          <i className="bi bi-chat-right-quote"></i>
          &nbsp; New quote
        </button>
      </div>
    </div>
  );
};

QuoteComponent.proptypes = {
  quote: PropTypes.object.isRequired,
  generateRandomQuote: PropTypes.func.isRequired,
};

export default QuoteComponent;
