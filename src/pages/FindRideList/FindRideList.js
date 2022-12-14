import React from 'react';
import { useNavigate } from 'react-router-dom';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import { RideCard } from './components';

function FindRideList() {
  return (
    <Main>
      <Container>
        <Box>
          <RideCard />
        </Box>
      </Container>
    </Main>
  );
}

export default FindRideList;
