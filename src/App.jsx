import { Component } from "react";
import LoaderComponent from "./components/Loader";
import QuoteComponent from "./components/Quote";
import "bootswatch/dist/superhero/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quoteIndex: null,
    };
  }

  async componentDidMount() {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const quotes = await response.json();
    const quoteIndex = this.generateRandomIndex(quotes);

    this.setState({
      quotes,
      quoteIndex,
    });
  }

  generateRandomIndex = (quotes = this.state.quotes) => {
    const maxIndex = quotes?.length || 50;
    const rnd = Math.floor(Math.random() * maxIndex);
    return rnd;
  };

  generateRandomQuote = () => {
    const quoteIndex = this.generateRandomIndex();

    this.setState({
      quoteIndex,
    });
  };

  render() {
    const isLoading = !this.state.quotes || !this.state.quoteIndex;

    return (
      <div className="App">
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <QuoteComponent
            quote={this.state.quotes[this.state.quoteIndex]}
            generateRandomQuote={() => this.generateRandomQuote()}
          />
        )}
      </div>
    );
  }
}

export default App;
