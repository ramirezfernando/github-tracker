import React from 'react'
import Link from '@mui/material/Link';
import { colors } from './colors';

function Footer() {
  return (
    <div style={footerStyles}>
    Made with ❤️ by  <Link rel="noopener noreferrer" target="_blank" underline="hover" color="inherit" href="https://github.com/ramirezfernando">ramirezfernando</Link>.
    </div>
  )
}
const footerStyles = {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 20,
    };
export default Footer