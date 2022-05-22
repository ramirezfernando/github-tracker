import React from 'react'
import { colors } from './colors';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";

function Search() {
  return (
    <div>
      <form>
        <TextField 
          hiddenLabel
          style={searchStyles}
          sx={{ input: { color: colors.white } }}
          variant="outlined"
          placeholder="Find user"
          size="small"
        />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: colors.white }} />
      </IconButton>
    </form>
  </div>
  )
}
const searchStyles = {
  color: colors.white,
  fontFamily: 'Arial',
  fontSize: 40,
  marginBottom: 30,
  borderColor: colors.white,
  backgroundColor: colors.light_grey,

};
export default Search;