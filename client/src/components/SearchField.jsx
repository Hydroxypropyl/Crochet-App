import { Paper, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom'
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';

const Listbox = styled('ul')(({ theme }) => ({
  width: '85%',
  margin: 0,
  padding: '5px',
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 200,
  maxWidth: 580,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

const SearchField = ({ autoComplete, filteredStitches, setSearchQuery }) => {
  const navigate = useNavigate();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'autocomplete',
    onChange: (e, v) => setSearchQuery(v.name),
    options: filteredStitches,
    getOptionLabel: (option) => option.name,
  });

  const onKeyPress = (event) => {
    if (event.keyCode === 13 && event.target.value.length > 0){
      event.preventDefault()
      if (filteredStitches.length === 1) {
        navigate('/stitches/' + filteredStitches[0].id)
        setSearchQuery('')
      }
    }
  }

  return (
    <Paper
      component="form"
      elevation={2}
      sx={{
        p: '2px 4px',
        display: 'block',
        alignItems: 'center',
        backgroundColor: '',
        borderRadius: '25px',
        width: '95%',
        maxWidth: '600px',
        padding: '0 10px'
      }}
      {...getRootProps()}
    >
      <InputBase
          sx={{ ml: 1, flex: 1, width: '98%' }}
          placeholder="Search for a stitch"
          inputProps={{ 'aria-label': 'search stitch', ...getInputProps()}}
          onChange={(event) => {
            event.preventDefault()
            setSearchQuery(event.target.value)
          }}
          onKeyDown={(e) => onKeyPress(e)}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon sx={{ margin: '5px' }} />
            </InputAdornment>
          }
        />
      {groupedOptions.length > 0 && autoComplete ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.name}</li>
          ))}
        </Listbox>
      ) : null}
    </Paper>
  )
}

export default SearchField