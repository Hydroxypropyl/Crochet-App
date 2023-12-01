import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const Sort = ({ sortData }) => {
  const [sort, setSort] = useState('');

  const handleChange = (event) => {
    sortData(event)
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