import React, { Component } from "react";
import Title from "./Title";
import "./Counter.css";

// Define a new Component with a class
// It must extend Component (which we imported above)
class Counter extends Component {
  constructor(props) {
    super(props); // You must call super() in the constructor!

    console.log(props)
  }

  render() {

    return (
      <div className="Counter">
        <button
          onClick={() => {
            this.props.incrementCounter(this.props.countValue)
          }}
          className="Counter--button"
        >
          Count {this.props.countValue}
        </button>
      </div>
    );
  }
}

export default Counter;
