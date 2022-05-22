import React from 'react'
import { colors } from './colors';

function Title() {
  return (
    <h1 style={titleStyles}>GitHub Profiles</h1>
  )
}
const titleStyles = {
    color: colors.white,
    fontFamily: 'Arial',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 40,
};
export default Title;