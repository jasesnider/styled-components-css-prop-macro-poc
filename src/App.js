import React, { Component } from "react";
import "./App.css";
import "styled-components/macro";
import Button from "./Button";

class App extends Component {
  state = {
    secondary: false
  };

  toggleSecondButton = () => {
    this.setState({ secondary: !this.state.secondary });
  };

  render() {
    const { secondary } = this.state;

    return (
      <div className="App">
        <header className="App-header" />
        <div
          css={`
            background: grey;
            color: white;
          `}
        >
          Toggling the state to dynamically set styling on the second button
          using styled components macros.
        </div>
        <div>
          <Button
            label="Toggle Second Button Styles"
            onClickHandler={this.toggleSecondButton}
          />
        </div>
        <div>
          <Button secondary={secondary} label="I'm changing!" />
        </div>
      </div>
    );
  }
}

export default App;
