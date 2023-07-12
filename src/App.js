import { useEffect, useState } from 'react';
import './App.css';

function App() {  
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <section className="container-fluid">
  <h1 className='text-primary'>Random Quotes!</h1>
  
  <div className="well">
    
    <p className="quote-text">{quotes.text}</p>
    <p className="author-text">{quotes.author}</p>
  </div>
  <button type="submit" className="btn btn-primary" id="quote" onClick={getQuote}>New Quote</button>
</section>
  );
}

export default App;
