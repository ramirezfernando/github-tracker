import React from 'react'
import { colors } from './colors';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Data from './data';

function Search() {
  // Redux
  const search = useSelector((state) => state.onSearch);
  const dispatch = useDispatch();
  const searchUser = () => {
    dispatch({type:'SEARCHING'});
    console.log(userRef.current.value)
  };
  const userRef = useRef('') //creating a refernce for TextField Component

  
  const [username, setUsername] = useState("");


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
          inputRef={userRef}   //connecting inputRef property of TextField to the valueRef

        />
      <IconButton onClick={searchUser} aria-label="search">
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