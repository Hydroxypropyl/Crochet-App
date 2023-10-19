import React, { useState, Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: props.name,
    };
  }

  increase = () => {
    this.setState({counter: this.state.counter + 1}
    )
  }

  decrease = () => {
    if (this.state.counter > 0) {
      this.setState({counter: this.state.counter - 1}
      )
    }
  }

  render() {
    return(
      <div class="Counter">
      <div class="CounterName">
      {this.state.name} Counter
      </div>
      <div class="CounterBar" style={{display:'inline'}}>
        <button onClick={this.decrease}>-</button>
        <p>{this.state.counter}</p>
        <button onClick={this.increase}>+</button>
      </div>
      </div>
    )
      
  }

}

export default CounterClass
