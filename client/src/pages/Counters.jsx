import { useState } from "react"; 
import CounterClass from "./CounterClass.jsx"

/*
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div>
        {this.props.name}
        <div style={{ display: 'inline' }}>
          <button onClick={this.decrease}>-</button>
          <p>{this.state.counter}</p>
          <button onClick={this.increase}>+</button>
        </div>
      </div>
    );
  }
}*/
/*
function Counter(name) {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      {name}
      <div style={{ display: 'inline' }}>
        <button onClick={decrease}>-</button>
        <p>{counter}</p>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}
*/

const Counters =() => {
  return (
    <div style={{display:'inline'}}>
      <CounterClass name="Rows"/>
      <CounterClass name="Stitches"/>
    </div>
  );
  
}


export default Counters
