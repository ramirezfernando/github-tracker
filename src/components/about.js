import React from 'react'
import { colors } from './colors';
import Link from '@mui/material/Link';

function about() {
  return (
    <div style={aboutStyles}>
        This tool uses GitHub's API to fetch GitHub user's data. 
        Use this to view other GitHub user's profile, stats, and public repositories. 
    </div>
  )
}
const aboutStyles = {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 20,
    marginBottom: 20,
};

export default about