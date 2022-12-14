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
      <Container bgcolor='white'>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <FilterOptions />
            </Grid>
            <Grid item xs={12} lg={9}>
              <RideCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Main>
  );
}

export default FindRideList;
