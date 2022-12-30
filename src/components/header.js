import quotes from './quotes';
import React, { useState } from 'react';
//User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

const QuoteBox = () => {
  // this Declares a state variable called "quote" with an initial value of an empty string
  const [quote, setQuote] = useState('');

  // this Creates a function that sets the quote to a new random quote
  const getNewQuote = () => {
    // this Gets a new quote from the quotes array
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // this Updates the quote state with the new quote
    setQuote(newQuote);
  }

  // this On first load, gets a new quote
  React.useEffect(() => {
    getNewQuote();
  }, []); // The empty array ensures that this only runs on first load

  return (
    <div id="quote-box">
      <div id="text">
        {quote.text}
      </div>
      <div id="author">
        author element
      </div>
      <button id="new-quote" onClick={getNewQuote}>New Quote</button>
      <a href="/" id="tweet-quote">Tweet Quote</a>
    </div>
  );
};

    
    

export default QuoteBox;

