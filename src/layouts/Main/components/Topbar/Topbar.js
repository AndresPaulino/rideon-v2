import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();

  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
      <Box
        display={'flex'}
        component='a'
        href='/'
        title='RideOn'
        width={80}
      >
        <Box
          component={'img'}
          src={'/assets/logo.svg'}
          height={1}
          width={1}
        />
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            lg: 'flex',
          },
        }}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          component='nav'
          sx={{
            '& > * + *': {
              marginLeft: 2,
            },
          }}
        >
          {pages.map((page) => (
            <NavItem title={page.title} activeLink={page.href} href={page.href} id={'home'} colorInvert={colorInvert} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'block',
            lg: 'none',
          },
        }}
        alignItems={'center'}
      >
        <Button
          onClick={() => onSidebarOpen()}
          aria-label='Menu'
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
