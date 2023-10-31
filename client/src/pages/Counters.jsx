import React, { useState } from "react"; 
import CounterClass from "./CounterClass.jsx"
import styles from './css/counters.module.css';
import Button from '@mui/material/Button';



const Counters =() => {
  const [hideText, setHideText] = useState(true);
  const toggleTextVisibility = () => {
    setHideText(!hideText);
  };
  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center",}}>
      <div className={styles.counterDisplayer}>
        <CounterClass name="Rows"/>
        {!hideText && <CounterClass name="Stitches" />}
      </div>
      <div>
        <Button onClick={toggleTextVisibility} variant="contained" color="lightPink">
          {hideText ? "Add stitch counter" : "Remove stitch counter"}
        </Button>
        
      </div>
    </div>
  );
}


export default Counters
