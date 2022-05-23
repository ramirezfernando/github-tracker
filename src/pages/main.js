import { useSelect } from '@mui/base';
import React from 'react';
import { Title, About, Search, Footer, Divider, Data } from '../components/index';
import { searchUser } from '../reducers/validUser';

function Main() {

  return (
    <div>
        <Title />
        <About />
        <Search />
    </div>
  )
}

export default Main;