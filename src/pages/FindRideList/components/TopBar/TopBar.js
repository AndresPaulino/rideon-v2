import React from 'react';
import SearchBar from './components/SearchBar';
import Box from '@mui/material/Box';

function TopBar() {
  return (
    <Box py={2}>
      <SearchBar />
    </Box>
  );
}

export default TopBar;
