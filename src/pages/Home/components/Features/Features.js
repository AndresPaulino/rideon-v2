/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: '30',
    subtitle:
      'more than 30 million people count on us.',
    suffix: 'M'
  },
  {
    title: '60',
    subtitle:
      'more than 60 years of business and still rapidly growing.',
    suffix: '+'
  },
  {
    title: '95',
    subtitle: 'more than 95% customer retention.',
    suffix: '%'
  }
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Why Nation Safe Drivers is so Important
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Nation Safe Drivers (NSD) improves the operations of tens of millions of people,
              institutions, and small businesses across North America. By joining the vast network
              of NSD providers, companies like yours are entitled to a simple to use source of
              revenue without increasing your budget by a penny.
              <br />
              <br />
              NSD members will take advantage of higher commissions, superior products, innovative
              technology, 24/7 service, instantaneous claims response and outstanding protection.
              NSD has been an integral component of the auto industry for more than 60 years. As a
              result, they are in an excellent position to complement your current benefits and
              services with their infinite pool of supplemental products.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant='h4' color={'primary'} gutterBottom>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      duration={2}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color='text.secondary' component='p'>
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent='center'
          alignItems='center'
          xs={12}
          md={6}
          sx={{
            display: {
              xs: 'none',
              md: 'flex'
            }
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image='https://images.unsplash.com/photo-1611448746128-7c39e03b71e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
