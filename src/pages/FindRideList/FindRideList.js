import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { RideCard, FilterOptions, TopBar } from './components';
import { useAuthContext } from 'hooks/useAuthContext';
import { Typography } from '@mui/material';

function FindRideList() {
  const { getRides } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [rides, setRides] = useState([]);
  const navigate = useNavigate();

  // determine if rideDate is in the past
  const isPast = (date) => {
    const today = new Date();
    const rideDate = new Date(date);
    return rideDate < today;
  };

  useEffect(() => {
    const fetchRides = async () => {
      setLoading(true);
      const rides = await getRides();
      setRides(rides.filter((ride) => !isPast(ride.rideDate)));
      setLoading(false);
    };
    fetchRides();
  }, [getRides]);

  return (
    <Main>
      <Box bgcolor={'white'}>
        <Container bgcolor='white' borderRadius={2}>
          <TopBar />
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <FilterOptions />
            </Grid>
            <Grid item xs={12} lg={9}>
              {loading ? (
                <div>Loading...</div>
              ) : rides.length > 0 ? (
                rides.map((ride) => (
                  <RideCard key={ride.id} ride={ride} onClick={() => navigate(`/find-ride/${ride.id}`)} />
                ))
              ) : (
                <Box>
                  <Typography
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100vh',
                    }}
                    variant='h4'
                    color='text.secondary'
                    gutterBottom
                  >
                    No rides found
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
}

export default FindRideList;
