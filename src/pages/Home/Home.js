import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Benefits, Features, GetStarted, Hero, QuickStart, Services } from './components';

function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Main bgcolor={'background.paper'}>
        <Hero />
        <Container>
          <Services />
        </Container>
        <Container>
          <Features />
        </Container>
        <Container>
          <QuickStart />
        </Container>
        <Box
        // sx={{
        //   backgroundImage: `linear-gradient(to bottom, ${alpha(
        //     theme.palette.background.paper,
        //     0
        //   )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        //   backgroundRepeat: 'repeat-x',
        //   position: 'relative'
        // }}
        >
          <Container>
            <Benefits />
          </Container>
        </Box>
        <Container>
          <GetStarted />
        </Container>
      </Main>
    </Box>
  );
}

export default Home;
