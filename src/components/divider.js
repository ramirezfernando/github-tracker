import React from 'react'
import { Divider } from '@mui/material';
import { colors } from './colors';

function divider() {
  return (
    <Divider style={dividerStyles}/>
    )
}
const dividerStyles = {
    background: colors.grey,
  };
export default divider;