import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { RideCard, FilterOptions, TopBar } from './components';
import { useAuthContext } from 'hooks/useAuthContext';

function FindRideList() {
  const { user, getRides } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [rides, setRides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRides = async () => {
      setLoading(true);
      const rides = await getRides();
      setRides(rides);
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
              ) : (
                rides.map((ride) => (
                  <RideCard key={ride.rideId} ride={ride} onClick={() => navigate(`/app/rides/${ride.rideId}`)} />
                ))
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
}

export default FindRideList;
