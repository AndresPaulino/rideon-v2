import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const {
    about: about,
    techandpartnerships: techandpartnerships,
    products: products,
    solutions: solutions,
    careers: careers,
    blog: blogPages,
    claims: claims,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="NSD"
        width={{
          xs: 100,
          md: 120,
        }}
      >
        <Box
          component={'img'}
          src={'https://nsdstaticasset.blob.core.windows.net/assets/nsd.png'}
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
        <Box>
          <NavItem
            title={'About Us'}
            id={'landing-pages'}
            items={about}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Products & Services'}
            id={'company-pages'}
            items={products}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Industry Solutions'}
            id={'account-pages'}
            items={solutions}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Partnerships'}
            id={'secondary-pages'}
            items={techandpartnerships}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Social'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Careers'}
            id={'portfolio-pages'}
            items={careers}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Login'}
            id={'claims-pages'}
            items={claims}
            colorInvert={colorInvert}
          />
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
          aria-label="Menu"
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
