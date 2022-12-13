import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const FindRide = () => {
  const history = useNavigate();
  const goToRides = () => {
    window.scrollTo(0, 0);
    history('/find-a-ride');
  };
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant='h4'
          data-aos={'fade-up'}
          gutterBottom
          color={'primary.main'}
          sx={{
            fontWeight: 700,
          }}
        >
          Join the RideOn family
        </Typography>
        <Typography variant='h6' color={'common.white'} data-aos={'fade-up'}>
          Make new friends and ride together anywhere in the world. Your next adventure awaits. RideOn.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box display='flex' marginTop={{ xs: 2, md: 0 }}>
          <Box display='flex' marginTop={1}>
            <Button
              size={'large'}
              paddingLeft={0}
              onClick={goToRides}
              endIcon={
                <Box
                  component={'svg'}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  width={24}
                  height={24}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </Box>
              }
            >
              Find a Ride
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FindRide;
