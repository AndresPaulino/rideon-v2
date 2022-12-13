import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 300,
    subtitle:
      '300 + rides created and counting. We are the motorcycle community’s go-to platform for rides and events.',
    suffix: '+',
  },
  {
    title: 1440,
    subtitle: '1440 + members in our community. Join us today and become a part of the RideOn family.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our members have enjoyed finding people to ride with and have had a great experience.',
    suffix: '%',
  },
];

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Grid container spacing={4}>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos='flip-left'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={
            'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }
          alt='...'
          effect='blur'
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography variant='h4' color='common.white' sx={{ fontWeight: 700 }}>
              Find your next motorcycle ride or event with like-minded people near you with{' '}
              <Typography color={'primary'} component={'span'} variant={'inherit'}>
                RideOn
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={4}>
            <Typography variant='h6' component='p' color='text.secondary'>
              RideOn is a motorcycle community platform that allows you to find and create rides and events with
              like-minded people near you. We are the go-to platform for motorcycle enthusiasts to find their next ride
              or event.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Typography variant='h3' gutterBottom color={'common.white'}>
                    <Box fontWeight={600}>
                      <VisibilitySensor onChange={(isVisible) => setViewPortVisibility(isVisible)} delayedCall>
                        <CountUp duration={2} end={viewPortEntered ? item.title : 0} start={0} suffix={item.suffix} />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                  <Typography color='text.secondary' component='p'>
                    {item.subtitle}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
