import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getMoviesByGenre, getMoviesByRating } from '../../api/movies';

export default function SelectorComponent({ name, options }) {
  const [selectedValue, setSelectedValue] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (name.toLowerCase() === 'genres') {
      dispatch(getMoviesByGenre(value));
    } else if (name.toLowerCase() === 'ratings') {
      dispatch(getMoviesByRating(value));
    }
  };

  return (
    <Box sx={{ minWidth: 120, marginLeft: 2 }}>
      <FormControl fullWidth>
        <InputLabel id={`${name}-select-label`}>{name}</InputLabel>
        <Select
          labelId={`${name}-select-label`}
          id={`${name}-select`}
          value={selectedValue}
          label={name}
          onChange={handleChange}
          sx={{ border: '1px solid white' }}
        >
          {options?.length > 0 &&
            options.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
