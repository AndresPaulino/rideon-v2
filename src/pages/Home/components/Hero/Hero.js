import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();
  const history = useNavigate();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box height={'100%'} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Box
        data-aos={isMd ? 'fade-right' : 'fade-up'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box marginBottom={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Typography variant='h3' color='white' sx={{ fontWeight: 700, alignItems: 'center' }}>
            <Typography color={'primary'} component={'span'} variant={'inherit'}>
              RideOn
            </Typography>
          </Typography>
        </Box>
        <Box marginBottom={3} display={'flex'} justifyItems={'center'} alignItems={'center'}>
          <Typography
            variant='h6'
            component='p'
            color='white'
            display={'flex'}
            justifyItems={'center'}
            alignItems={'center'}
          >
            A place to meet and connect with other riders. <br /> Find a ride or create a ride today.
          </Typography>
        </Box>
        <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'stretched', sm: 'center' }}>
          <Box
            component={Button}
            variant='contained'
            color='white'
            size='large'
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            fullWidth={isMd ? false : true}
            onClick={() => {
              history('/create-a-ride');
            }}
          >
            Create a Ride
          </Box>
          <Box
            component={Button}
            variant='contained'
            color='white'
            size='large'
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            fullWidth={isMd ? false : true}
            onClick={() => {
              history('/find-a-ride');
            }}
          >
            Find a Ride
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
