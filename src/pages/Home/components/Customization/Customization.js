/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Customization = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          EASY TO USE
        </Typography>
        <Typography
          variant='h4'
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Create or join a ride in minutes
        </Typography>
        <Typography variant='h6' align={'center'} color={'text.secondary'} data-aos={'fade-up'}>
          <br />
          1. Create a Ride
          <br />
          2. Set starting location and destination
          <br />
          3. Set date and time
        </Typography>
        <Box
          display='flex'
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        ></Box>
      </Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid
            container
            alignItems='center'
            sx={{
              marginTop: { xs: 0, md: '10%' },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={''}
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
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid
            container
            alignItems='center'
            sx={{
              marginTop: { xs: 0 },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={''}
              alt='...'
              effect='blur'
              boxShadow={3}
              borderRadius={2}
              maxWidth={600}
              sx={{
                filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={''}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customization;
