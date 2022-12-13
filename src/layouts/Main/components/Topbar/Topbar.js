import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem, AccountMenu } from './components';
import { Typography } from '@mui/material';

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
        sx={{
          textDecoration: 'none',
          textShadow: `1px 0 10px darkgray, 0 1px 10px black, 1px 0 10px black, 0 1px 10px black`,
        }}
      >
        <Box component={'img'} src={'/assets/logo.svg'} height={1} width={1} />
        <Typography
          color={'primary'}
          variant={'inherit'}
          sx={{
            fontFamily: 'Dancing Script',
            fontSize: '2rem',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          RideOn
        </Typography>
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
        <Box marginLeft={2}>
          <AccountMenu colorInvert={colorInvert} />
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
