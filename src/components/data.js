import React, { useState } from 'react'
import { colors } from './colors';
import { useSelector } from 'react-redux';
import useFetch from '../api/useFetch';
import CircularProgress from '@mui/material/CircularProgress';
import { searchUser } from '../reducers/validUser';
import store from '../store';
import axios from 'axios';
function Data(props) {
    const [userData, setUserData] = useState("")
    
    const searching  = useSelector(searchUser)
    
    if (searching) {
        const userName = store.getState().user.user.name;
        console.log(userName)
        // fetch 
        axios.get('https://api.github.com/users/' + userName)
        .then(res => {
            console.log(res.data)
            setUserData(res.data)
        }).catch(err => {
            console.log(err)
        })

    }
    

  return (
    <div style={dataContainer}>
        <div>
            { userData ? <p>{userData.bio}</p> : null }
        </div>
    </div>

  )
}
const dataContainer = {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 40,
    marginTop: 30,
    borderColor: colors.white,
    backgroundColor: colors.light_grey,
  };

export default Data;