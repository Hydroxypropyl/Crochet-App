import { useState } from "react"; 
import CounterClass from "./CounterClass.jsx"
import styles from './css/counters.module.css';


const Counters =() => {
  return (
    <div className={styles.counterDisplayer}>
      <CounterClass name="Rows" className={styles.counter}/>
      <CounterClass name="Stitches" className={styles.counter}/>
    </div>
  );
  
}


export default Counters
