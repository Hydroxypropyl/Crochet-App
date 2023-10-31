import React, { useState, Component } from 'react';
import styles from './css/counters.module.css';
import Button from '@mui/material/Button';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: props.name,
    };
  }

  increase = () => {
    this.setState({counter: this.state.counter + 1})
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
          <Button onClick={this.decrease} variant="contained" color="lightBlue">–</Button>
          <p>{this.state.counter}</p>
          <Button onClick={this.increase} variant="contained" color="darkBlue">+</Button>
        </div>
      </div>
    )
      
  }

}

export default CounterClass
