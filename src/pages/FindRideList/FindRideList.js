import React from 'react';
import { useNavigate } from 'react-router-dom';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { RideCard, FilterOptions } from './components';

function FindRideList() {
  return (
    <Main>
      <Box bgcolor={'white'}>
        <Container bgcolor='white' borderRadius={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <FilterOptions />
            </Grid>
            <Grid item xs={12} lg={9}>
              <RideCard />
              <RideCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
}

export default FindRideList;
