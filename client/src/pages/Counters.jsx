import React, { useState, useEffect } from 'react'
import styles from '../styles/counters.module.css';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import api from '../api';

const Counters =( { setAndPopMessage } ) => {
  const [hideText, setHideText] = useState(true);
  const [counters, setCounters] = useState([0, 0]);
  const [name, setName] = useState("");
  const [once, setOnce] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    if (!id || once) {
      return;
    } else {
      api.getCounterByProjectId(id).then(res => {
        if (res.success) {
          setCounters(res.counters);
          setName(res.name);
        } else {
          setAndPopMessage(res.message, res.severity);
        }
    })
    }
    setOnce(true);
  }, [id, setAndPopMessage, once]);
  
  const toggleTextVisibility = () => {
    setHideText(!hideText);
  };

  const decrease = (pos) => {
    const new_counters = [counters[0]+(1-pos), counters[1]+pos]
    setCounters(new_counters);
  }

  const increase = (pos) => {
    const new_counters = [counters[0]-(1-pos), counters[1]-pos]
    setCounters(new_counters);
  }

  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center",}}>
      <div>
        <h1>{name}</h1>
      </div>
      <div className={styles.counterDisplayer}>

        <div className={styles.counter}>
          <p className={styles.counterName}>
          Rows:
          </p>
          <div className={styles.counterBar}>
            <Button onClick={() => increase(0)} variant="contained" color="lightBlue">–</Button>
            <p>{counters[0]}</p>
            <Button onClick={() => decrease(0)} variant="contained" color="darkBlue">+</Button>
          </div>
        </div>

        {!hideText && 
          <div className={styles.counter}>
            <p className={styles.counterName}>
            Stitches:
            </p>
            <div className={styles.counterBar}>
              <Button onClick={() => increase(1)} variant="contained" color="lightBlue">–</Button>
              <p>{counters[1]}</p>
              <Button onClick={() => decrease(1)} variant="contained" color="darkBlue">+</Button>
            </div>
          </div>
        
        }
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
