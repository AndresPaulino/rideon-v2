import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NavItem = ({ title, id, href, activeLink, colorInvert = false }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState('');

  const hasActiveLink = () => {
    return active === activeLink;
  };

  useEffect(() => {
    setActive(window && window.location ? window.location.pathname : '');
  }, []);

  const handleClick = () => {
    navigate(href);
  };

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box display={'flex'} alignItems={'center'} aria-describedby={id} sx={{ cursor: 'pointer' }}>
        <Typography fontWeight={hasActiveLink() ? 'bold' : 400} color={linkColor} onClick={handleClick}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavItem;
