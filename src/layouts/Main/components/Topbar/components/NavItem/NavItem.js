import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NavItem = ({ title, id, href, handleTabChange, activeTab, colorInvert = false }) => {
  const navigate = useNavigate();

  const hasActiveLink = () => {
    return activeTab === href;
  };

  const handleClick = () => {
    navigate(href);
    handleTabChange(href);
  };

  const linkColor = colorInvert ? 'common.white' : 'common.white';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        sx={{
          bgcolor: hasActiveLink() ? 'primary.main' : 'transparent',
          '&:hover': {
            bgcolor: 'primary.main',
          },
          cursor: 'pointer',
          borderRadius: 1,
          p: 1,
          m: 1,
        }}
      >
        <Typography fontWeight={hasActiveLink() ? 'bold' : 400} color={linkColor} onClick={handleClick}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default NavItem;
