import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import StitchItem from '../components/StitchItem';
import { SearchField, Sort } from '../components';

const StitchGlossary = ({ filteredStitches, setSearchQuery, sortData }) => {

    return (
      <Box sx={{ flexGrow: 1, margin: 1, display: 'grid', justifyItems: 'center', gap: '25px', padding: '25px 0' }}>
        <SearchField filteredStitches={filteredStitches} setSearchQuery={setSearchQuery} />
        <Sort sortData={sortData} />
        { filteredStitches.length > 0 && filteredStitches
          ? <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {filteredStitches.map((row) => (
              <StitchItem key={row.id} name={row.name} image={row.image} difficulty={row.difficulty} id={row.id}></StitchItem>
            ))}
            </Grid>
          : <p>No stitches found</p>
      }
      </Box>
    )
    
}

export default StitchGlossary