import React, { useState, useEffect } from 'react'
import api from '../api'
import styles from "../styles/glossary.module.css"

import StitchItem from '../components/StitchItem';

// Sortable table example in Material UI: https://mui.com/material-ui/react-table/#sorting-amp-selecting

const StitchGlossary = () => {
    const [stitches, setStitches] = useState([]);

    useEffect(() => {
        api.getAllStitches().then(res => {
          if (res.success) {
            console.log(res.data);
            setStitches(res.data);
          } else {
            window.alert(`Unable to fetch stiches`);
          }
        })
    }, [])

    /*const addStitch = async () => {
        const payload = { name: "Stitch_test", difficulty: "4", image: "my_image"}

        await api.insertStitch(payload).then(res => {
            window.alert(`Stitch inserted successfully`);
            window.location.reload();
        })
    }*/

    console.log('TCL: StitchesList -> render -> stitches', stitches)

    return (
        <div className={styles.glossary_container}>
          {stitches.map((row) => (
            <StitchItem key={row.id} name={row.name} image={row.image}></StitchItem>

          ))}
        </div>
    )
    
}

export default StitchGlossary