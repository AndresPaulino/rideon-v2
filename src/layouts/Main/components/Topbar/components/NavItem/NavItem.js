import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NavItem = ({ title, href }) => {
  const navigate = useNavigate();

  const activeStyle = {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#f4a261',
    '&:hover': {
      backgroundColor: '#f4a261',
      padding: '0.5rem',
      borderRadius: '0.5rem',
    },
    padding: '0.5rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
  };
  const inactiveStyle = {
    color: 'white',
    fontWeight: 'normal',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#f4a261',
      padding: '0.5rem',
      borderRadius: '0.5rem',
    },
  };

  return (
    <Box>
      <NavLink to={href} style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
        {title}
      </NavLink>
    </Box>
  );
};

export default NavItem;
