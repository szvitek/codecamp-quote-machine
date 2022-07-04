import { useEffect, useState } from "react";
import LoaderComponent from "./components/Loader";
import QuoteComponent from "./components/Quote";
import "bootswatch/dist/superhero/bootstrap.min.css";
import "./App.css";

const fetchData = async () => {
  const url = "https://type.fit/api/quotes";
  const response = await fetch(url);
  return response.json();
};

const App = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(null);

  /**
   * use mounted to prevent memory leaks and errors
   * https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react#step-2-preventing-errors-on-unmounted-components
   */
  useEffect(() => {
    let mounted = true;
    fetchData().then((quotes) => {
      if (mounted) {
        setQuotes(quotes);
      }
    });
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted && quotes.length) {
      generateRandomQuote();
    }
    return () => (mounted = false);
  }, [quotes]);

  const generateRandomQuote = () => {
    const maxIndex = quotes?.length || 50;
    const quoteIndex = Math.floor(Math.random() * maxIndex);
    setQuoteIndex(quoteIndex);
  };

  return (
    <div className="App">
      {!quotes || !quoteIndex ? (
        <LoaderComponent />
      ) : (
        <QuoteComponent
          quote={quotes[quoteIndex]}
          generateRandomQuote={generateRandomQuote}
        />
      )}
    </div>
  );
};

export default App;
