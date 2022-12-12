import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const history = useNavigate();
  const goToParners = () => {
    window.scrollTo(0, 0);
    history('/become-a-partner');
  };
  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Let&apos;s Partner Up
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >
        Join the many other partners and their success
      </Typography>
      <Box textAlign={'center'} marginTop={2}>
        <Button
          size={'large'}
          onClick={goToParners}
          endIcon={
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </Box>
          }
        >
          Become a Partner
        </Button>
      </Box>
    </Box>
  );
};

export default GetStarted;
