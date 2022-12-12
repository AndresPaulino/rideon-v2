/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

const QuickStart = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  return (
    <Box
      padding={{
        xs: 2,
        sm: 4
      }}
      borderRadius={2}
      bgcolor={
        theme.palette.mode === 'light' ? colors.blue[50] : colors.blue[900]
      }
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{
          xs: 'column-reverse',
          md: 'row'
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant='h4'
            color='text.primary'
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700
            }}
          >
            The Nation Safe Drivers’ Customer Experience
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box marginBottom={4}>
            <Box marginBottom={2}>
              <Typography
                variant='h6'
                component='p'
                color='text.secondary'
                sx={{ fontWeight: 400 }}
                align={'center'}
              >
                Nation Safe Drivers (NSD) improves the operations of tens of millions of people,
                institutions, and small businesses across North America. By joining the vast network
                of NSD providers, companies like yours are entitled to a simple to use source of
                revenue without increasing your budget by a penny.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={'https://nsdstaticasset.blob.core.windows.net/assets/Main_Site/customer-experience.png'}
            alt='...'
            effect='blur'
            borderRadius={2}
            maxWidth={1}
            maxHeight={400}
            sx={{
              objectFit: 'cover'
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box marginBottom={4}>
            <Box marginBottom={2}>
              <Typography
                variant='h6'
                component='p'
                color='text.secondary'
                sx={{ fontWeight: 400 }}
                align={'center'}
              >
                NSD members will take advantage of higher commissions, superior products, innovative
                technology, 24/7 service, instantaneous claims response and outstanding protection.
                NSD has been an integral component of the auto industry for more than 60 years. As a
                result, they are in an excellent position to complement your current benefits and
                services with their infinite pool of supplemental products.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuickStart;
