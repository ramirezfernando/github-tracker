import React from 'react'
import { colors } from './colors';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import { Avatar, Button } from '@mui/material';
import { Grid } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Link } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../reducers/validUser'
import { Divider, Footer } from '.';
import axios from 'axios';
import { spacing } from '@mui/system';
import reportWebVitals from '../reportWebVitals';

function Search() {
  let config = {'Authorization': process.env.REACT_APP_API_KEY};

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
  setError(false)
  setLoading(true)
  
  axios.get('https://api.github.com/users/' + username, {headers: config})
      .then(res => {
          setUserData(res.data)
      }).catch(err => {
          setError(err);
      })

  axios.get('https://api.github.com/users/' + username + '/repos', {headers: config})
      .then(res => {
          setUserRepos(res.data)
      }).catch(err => {
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
      <div style={{marginBottom: 5, marginTop: 5}}>      <Divider />
</div>
    </form>

    { error ? <Alert severity="error"> User not found </Alert> :  

    <div style={dataContainer}>
        <div>
                { userData ? <Link href={userData.html_url} rel="noopener noreferrer" target="_blank"> 
                { userData ? <Avatar alt="pfp" src={userData.avatar_url}   sx={{ width: 200, height: 200 }} /> : null}
                </Link> : null }

                { userData ? <div style={{fontWeight:'bold'}}>{userData.name}</div> : null}

                { userData ? <div style={{color: colors.grey}}>{userData.login}</div> : null}
                <Grid container direction="row" justifyContent={'space-between'} my={1}>

                  { userData ? <div>{userData.public_repos} repos</div> : null}

                  { userData ? <div>{userData.followers} followers</div> : null}

                  { userData ? <div>{userData.following} following</div> : null}

                </Grid>


                { userData ? <div  style={{marginBottom: 10}}>{userData.bio}</div> : null}
       

            { userData ? <div style={{marginBottom: 10, marginTop: 10}}> <Divider /> </div>: null}

            <div>

            { userRepos ? <div> 
              {userRepos.map(repos => (
                <div style={{marginBottom: 5}}>
                  <Link href={repos.html_url} rel="noopener noreferrer" target="_blank"> 
                  <div style={{fontWeight:'bold', color: colors.white, marginBottom: 3}}>{repos.name}</div>
                  </Link>

                  <div style={{marginBottom: 3}}>{repos.description}</div>
                    <Grid container direction="row" mb={4}>
                      
                      <Button href={repos.html_url + '/stargazers'} rel="noopener noreferrer" target="_blank" variant="contained" startIcon={<StarIcon/>} style={{ backgroundColor: colors.yellow }}> {repos.stargazers_count}</Button>

                      <Button href={repos.html_url + '/fork'} rel="noopener noreferrer" target="_blank" variant="contained" startIcon={<AccountTreeIcon/>} style={{ backgroundColor: colors.blue }}> {repos.forks_count}</Button>

                      <Button href={repos.html_url} rel="noopener noreferrer" target="_blank" variant="contained" startIcon={<VisibilityIcon/>} style={{ backgroundColor: colors.green }}> {repos.watchers_count}</Button>

                    </Grid>
                </div>
              ))}

            </div> : null}

                
  
            </div>

           

        </div>

    </div>
    }
    
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

  backgroundColor: colors.light_grey,
};
export default Search;