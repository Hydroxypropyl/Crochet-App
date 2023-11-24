import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const Sort = ({ filteredStitches }) => {
  const [sort, setSort] = useState('');

  const handleChange = (event) => {
    if (event.target.value === 'A to Z') {
      console.log('Heelloo')
      filteredStitches.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
      console.log(filteredStitches)
    }
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-label">Sort</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={sort}
        label="Sort"
        onChange={handleChange}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'A to Z'}>A to Z</MenuItem>
        <MenuItem value={'Z to A'}>Z to A</MenuItem>
        <MenuItem value={'Easiest first'}>Easiest first</MenuItem>
        <MenuItem value={'Hardest first'}>Hardest first</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Sort