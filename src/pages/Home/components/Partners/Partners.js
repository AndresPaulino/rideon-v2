/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Partners = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box
      padding={{
        xs: 2,
        sm: 4,
      }}
      borderRadius={2}
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Our partners
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box marginBottom={4}>
            <Box marginBottom={2}>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                sx={{ fontWeight: 400 }}
                align={'center'}
              >
                NSD has ranked #1 in the prestigious Tow Force Top 10 Motor
                Clubs four of the past six years. Their investment in the most
                talented employees, innovative technology, claims administration
                and customer service tramples competition such as AAA, GEICO and
                Allstate. Repeatedly, customers rave over NSD’ service,
                products, and the resulting customer experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            data-aos={'fade-in'}
            data-aos-delay={750}
          >
            <video
              src={
                'https://res.cloudinary.com/drlyfc3tu/video/upload/v1660790358/nsd_animated_pgf0e5.mp4'
              }
              autoPlay
              muted
              playsInline
              width={'100%'}
            >
              <source
                src={
                  'https://res.cloudinary.com/drlyfc3tu/video/upload/v1660790358/nsd_animated_pgf0e5.mp4'
                }
                type="video/mp4"
              />
            </video>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box marginBottom={4}>
            <Box marginBottom={2}>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                sx={{ fontWeight: 400 }}
                align={'center'}
              >
                When an organization partners with NSD the care and service that
                they receive is unrivaled. For starters, NSD is the only company
                in the industry that operates and dispatches from their own
                service network. As a result, NSD is allowed to easily increase
                benefit at a competitive cost, while also providing an exemplary
                customer experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Partners;
