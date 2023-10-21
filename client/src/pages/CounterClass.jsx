import React, { useState, Component } from 'react';
import styles from './css/counters.module.css';

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
      <div className={styles.counter}>
        <p className={styles.counterName}>
        {this.state.name}
        </p>
        <div className={styles.counterBar}>
          <button onClick={this.decrease} className={styles.minusButton}>–</button>
          <p>{this.state.counter}</p>
          <button onClick={this.increase} className={styles.plusButton}>+</button>
        </div>
      </div>
    )
      
  }

}

export default CounterClass
