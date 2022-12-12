import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  // const theme = useTheme();
  // const { mode } = theme.palette;

  const {
    about: about,
    products: products,
    solutions: solutions,
    techandpartnerships: techandpartnerships,
    blog: blog,
    careers: careers,
    claims: claims,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="NSD"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              // mode === 'light'
              //   ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              //   : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              'https://nsdstaticasset.blob.core.windows.net/assets/nsd.png'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'About Us'} items={about} />
        </Box>
        <Box>
          <NavItem title={'Products & Services'} items={products} />
        </Box>
        <Box>
          <NavItem title={'Industry Solutions'} items={solutions} />
        </Box>
        <Box>
          <NavItem title={'Partnerships'} items={techandpartnerships} />
        </Box>
        <Box>
          <NavItem title={'Social'} items={blog} />
        </Box>
        <Box>
          <NavItem title={'Careers'} items={careers} />
        </Box>
        <Box>
          <NavItem title={'Login'} items={claims} />
        </Box>
        {/* <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/docs/introduction"
          >
            Documentation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Purchase now
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
