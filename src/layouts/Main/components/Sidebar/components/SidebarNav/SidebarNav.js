import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1} display={'flex'} justifyContent={'center'}>
        <Box display={'flex'} justifyContent={'center'} component='a' href='/' title='NSD' width={{ xs: 100, md: 120 }}>
          <Box component={'img'} src={'/assets/logo.svg'} height={80} width={80} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          {pages.map((page) => (
            <NavItem title={page.title} activeLink={page.href} href={page.href} id={page.title} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
