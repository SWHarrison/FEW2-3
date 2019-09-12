import React, {Component} from "react";
import "./App.css";

import SVG from "./components/SVG";

import Counter from "./components/Counter";
import Factory from "./components/Factory"

class App extends Component {

  constructor(props){
    super(props)
    // this.incrementCounter = this.incrementCounter.bind(this)

    this.state = {
      counter : 0
    }
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <header className="App-header">
          {/* Counts in 1s */}
          <Counter countValue={1}
            incrementCounter= {() => {
              this.setState({counter: this.state.counter += 1})
            }}
          />
          {/* Counts in 5s */}
          <Counter countValue = {3}
            incrementCounter= {(number) => {
              this.setState({counter: this.state.counter += number})
            }}
          />
          {/* Counts in 3s */}
          <Counter countValue = {5}
            incrementCounter= {(number) => {
              this.setState({counter: this.state.counter += number})
            }}
          />
          {this.state.counter > 10 ? <Factory /> : ""}
          <SVG />
        </header>
      </div>
    );
  }
}

export default App;
