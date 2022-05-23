import React from 'react'
import { colors } from './colors';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../reducers/validUser'
import { Divider, Footer } from '.';
import axios from 'axios';
function Search() {
  // Get input from search
  const [username, setUsername] = useState("");
  // Axios request states 
  const [userData, setUserData] = useState("");
  const [userRepos, setUserRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(search({
      name: username
  }));
  // Fetch basic user data
  setLoading(true)

  axios.get('https://api.github.com/users/' + username)
      .then(res => {
          console.log(res.data)
          setUserData(res.data)
      }).catch(err => {
          console.log(err)
          setError(err);
      })

  axios.get('https://api.github.com/users/' + username + '/repos')
      .then(res => {
          console.log(res.data)
          setUserRepos(res.data)
      }).catch(err => {
          console.log(err)
          setError(err);
      })

  setLoading(false)
    
  };

  return (
    <div>
      <form>
        <TextField 
          hiddenLabel
          style={searchStyles}
          sx={{ input: { color: colors.white } }}
          variant="outlined"
          placeholder="Search user..."
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      <IconButton onClick={handleSearch} aria-label="search">
        <SearchIcon style={{ fill: colors.white }} />
      </IconButton>
      <Footer />
      <Divider />
    </form>

    <div style={dataContainer}>
        <div>
            { userData ? <p>{userData.bio}</p> : null }
        </div>
    </div>

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
const dataContainer = {
  color: colors.white,
  fontFamily: 'Arial',
  fontSize: 40,
  marginTop: 30,
  borderColor: colors.white,
  backgroundColor: colors.light_grey,
};
export default Search;