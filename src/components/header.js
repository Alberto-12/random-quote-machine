import quotes from './quotes';
import React, { useState } from 'react';
//User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

const QuoteBox = () => {
    // Declare state variables for quote and author
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [author, setAuthor] = useState('');
  
    // Create a function that sets the quote and author states to new random values
    const getNewQuote = () => {
      // Get a new quote from the quotes array
      const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      // Update the quote and author states with the new quote and its author
      setQuote(newQuote);
      setAuthor(newQuote.author);
    }
  
    // On first load, get a new quote
    React.useEffect(() => {
      getNewQuote();
    }, []); // The empty array ensures that this only runs on first load
  
    return (
      <div id="quote-box" style={{textAlign:'center'}}>
        <div id="text">
          {quote.text}
        </div>
        <div id="author">
          {author}
        </div>
        <button id="new-quote" onClick={getNewQuote}>New Quote</button>
        <a href={"https://twitter.com/intent/tweet?text=" + quote.text + " -" + author} id="tweet-quote">Tweet Quote</a>
      </div>
    );
  };
  

    
    

export default QuoteBox;

