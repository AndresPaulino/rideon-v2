import { useState } from 'react';
import PropTypes from 'prop-types';
// MUI components
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// Custom components
import Container from 'components/Container';
import { Footer, Sidebar, Topbar } from './components';
import navPages from '../navigation';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box paddingY={0}>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}></Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: -1,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar onSidebarOpen={handleSidebarOpen} pages={navPages} colorInvert={trigger ? false : colorInvert} />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant='temporary' pages={navPages} />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={6}>
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
