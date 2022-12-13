import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Download = () => {
  const history = useNavigate();
  const goToParners = () => {
    window.scrollTo(0, 0);
    history('/become-a-partner');
  };
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Everything your team could need.
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>
          Our technology is built to make your business run safe and smoothly.
          Partner up with us today and get the best out of your business.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        {/* <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Apply in 15 minutes
          </Typography>
          <Typography>
            Complete a form today and we&apos;ll get back to you shortly.
          </Typography>
        </Box> */}
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box display="flex" marginTop={1}>
            <Button
              size={'large'}
              paddingLeft={0}
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
      </Box>
    </Box>
  );
};

export default Download;
