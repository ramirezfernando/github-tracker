import React from 'react'
import { useSelector } from 'react-redux';

function Data() {
    const onSearch = useSelector(state => state.onSearch);
  return (
    <div>
        {onSearch ? <h1 style={{color:'white'}}>Hi</h1> : ''}
    </div>

  )
}

export default Data;