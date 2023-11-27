import React, { useState, useEffect } from 'react'
import api from '../api'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import StitchItem from '../components/StitchItem';

const StitchGlossary = () => {
    const [stitches, setStitches] = useState([]);

    useEffect(() => {
        api.getAllStitches().then(res => {
            setStitches(res);
        })
    }, [])

    console.log('TCL: StitchesList -> render -> stitches', stitches)

    return (
      <Box sx={{ flexGrow: 1, margin: 1}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {stitches.map((row) => (
            <StitchItem key={row.id} name={row.name} image={row.image} difficulty={row.difficulty} id={row.id}></StitchItem>
          ))}
        </Grid>
      </Box>
    )
    
}

export default StitchGlossary