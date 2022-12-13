import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Customization, FindRide, Hero, Hub } from './components';

const Home = () => {
  const theme = useTheme();
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });
  return (
    <Main colorInvert={true}>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed='0.2'
        position={'relative'}
        minHeight={{ xs: 400, sm: 500, md: 600 }}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        marginTop={-13}
        paddingTop={13}
        id='agency__portfolio-item--js-scroll'
      >
        <Box
          className={'jarallax-img'}
          sx={{
            position: 'absolute',
            objectFit: 'cover',
            /* support for plugin https://github.com/bfred-it/object-fit-images */
            fontFamily: 'object-fit: cover;',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558980664-2cd663cf8dde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Container>
          <Hero />
        </Container>
      </Box>

      <Container>
        <Hub />
      </Container>

      <Box
        className={'jarallax'}
        data-jarallax
        data-speed='0.2'
        position={'relative'}
        minHeight={{ xs: 400, sm: 500, md: 600 }}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        marginTop={4}
        paddingTop={0}
        id='agency__portfolio-item--js-scroll'
      >
        <Box
          className={'jarallax-img'}
          sx={{
            position: 'absolute',
            objectFit: 'cover',
            /* support for plugin https://github.com/bfred-it/object-fit-images */
            fontFamily: 'object-fit: cover;',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558979159-2b18a4070a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Container position='relative' zIndex={2}>
          <Customization />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          viewBox='0 0 1921 273'
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon fill={theme.palette.background.paper} points='0,273 1921,273 1921,0 ' />
        </Box>
      </Box>
      <Container>
        <FindRide />
      </Container>
    </Main>
  );
};

export default Home;
