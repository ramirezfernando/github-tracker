import React from 'react'
import { useSelector } from 'react-redux';
import useFetch from '../api/useFetch';
import CircularProgress from '@mui/material/CircularProgress';

function Data(props) {
    // if state.onSearch AND fetch has no errors
    const onSearch = useSelector(state => state.onSearch);
    const { data, loading, error } = useFetch('ramirezfernando')

    if (loading) return (<CircularProgress />)
  return (
    <div>
        {onSearch && !error ? <h1 style={{color:'white'}}>{data?.name}</h1> : ''}
    </div>

  )
}

export default Data;