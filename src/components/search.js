import React from 'react'
import { colors } from './colors';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import { Avatar, Button } from '@mui/material';
import { Grid } from '@mui/material';


import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../reducers/validUser'
import { Divider, Footer } from '.';
import axios from 'axios';
import { spacing } from '@mui/system';

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
    <div style={searchContainer}>
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
          <Grid container spacing={1} >
              <Grid container item xs={6} direction="column">
                { userData ? <Avatar alt="pfp" src={userData.avatar_url}   sx={{ width: 200, height: 200 }} /> : null}
                { userData ? <div>{userData.name}</div> : null}
              </Grid>

              <Grid container item xs={6} direction="column" >
                { userData ? <div>{userData.login}</div> : null}
                <Grid container item xs={6} direction="row" >
                  { userData ? <div>{userData.public_repos} repos</div> : null}
                  { userData ? <div>{userData.followers} followers</div> : null}
                  { userData ? <div>{userData.following} following</div> : null}
                  { userData ? <Button/> : null}
                </Grid>

                <Grid container item xs={0} direction="row" >
                  { userData ? <div>{userData.bio}</div> : null}
                </Grid>
              </Grid>
            </Grid>
          
            <Divider />

            <div>
              hi
            </div>

            <div>
              hi
            </div>

            <div>
              hi
            </div>
        </div>







    </div>

  </div>
  )
}
const searchContainer = {
  marginBottom: 20,
};
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
  fontSize: 30,
  margin: 20,
  padding: 50,
  backgroundColor: colors.light_grey,
};
export default Search;