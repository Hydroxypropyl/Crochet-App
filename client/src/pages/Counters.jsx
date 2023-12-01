import React, { useState, useEffect } from 'react'
import CounterClass from "./CounterClass.jsx"
import styles from '../styles/counters.module.css';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import api from '../api';

const Counters =() => {
  const [hideText, setHideText] = useState(true);
  const [counters, setCounters] = useState([0]);
  const { id } = useParams();
  
  useEffect(() => {
    if (!id) {
      return;
    } else {
      console.log("goes here");
      api.getCounterByProjectId(id).then(res => {
        console.log(res);
        //setCounters(res.counters);
    })
    }
  }, [id]);
  
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
