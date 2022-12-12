/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const mock = [
  {
    title: '60 Years of Innovation',
    subtitle:
      'Leverage in-house technology, call center, and proprietary vendor network to deliver best-in-class customer experience',
    icon: (
      <Box
        component={'img'}
        height={62}
        width={62}
        src={
          'https://nsdstaticasset.blob.core.windows.net/assets/Qore_Icons/1-210.png'
        }
      />
    ),
  },
  // {
  //   title: '$1.3B Revenue',
  //   subtitle:
  //     'The firm has raised more than $18 billion across its investment funds and has created and manages an additional $6 billion of co-investments from its global limited partner investor base.',
  //   icon: (
  //     <Box
  //       component={'img'}
  //       height={62}
  //       width={62}
  //       src={
  //         'https://nsdstaticasset.blob.core.windows.net/assets/Qore_Icons/1-100.png'
  //       }
  //     />
  //   ),
  // },
  {
    title: '95%+ Customer Retention',
    subtitle:
      'All services are provided on a white label basis. Dedicated employee owned company vested in creating a best-in-class experience for every customer and client. Customer satisfaction score = 98%',
    icon: (
      <Box
        component={'img'}
        height={62}
        width={62}
        src={
          'https://nsdstaticasset.blob.core.windows.net/assets/Qore_Icons/1-109.png'
        }
      />
    ),
  },
  // {
  //   title: '15% 5 Year Organic Growth',
  //   subtitle:
  //     'BDT Capital Partners provides family and founder-led businesses with long-term, differentiated capital.',
  //   icon: (
  //     <Box
  //       component={'img'}
  //       height={70}
  //       // width={62}
  //       src={
  //         'https://nsdstaticasset.blob.core.windows.net/assets/Qore_Brand_Icons/insightQoreAppIcon.png'
  //       }
  //     />
  //   ),
  // },
  // {
  //   title: '30 Million Customers',
  //   subtitle:
  //     'BDT & Company provides solutions-based advice and access to a world-class network of business owners and leaders',
  //   icon: (
  //     <Box
  //       component={'img'}
  //       height={62}
  //       width={62}
  //       src={
  //         'https://nsdstaticasset.blob.core.windows.net/assets/Qore_Icons/1-109.png'
  //       }
  //     />
  //   ),
  // },
  {
    title: '200,000+ Service Providers in Network',
    subtitle:
      'Leading provider of roadside assistance, servicing industries such as:  automotive, fleet, insurance, and tire distribution',
    icon: (
      <Box
        component={'img'}
        height={62}
        width={62}
        src={
          'https://nsdstaticasset.blob.core.windows.net/assets/Qore_Icons/1-10.png'
        }
      />
    ),
  },
  {
    title: '74 NPS',
    subtitle:
      'Dedicated employee owned company vested in creating a best-in-class experience for every customer and client.  \n' +
      '\n' +
      'Customer satisfaction score = 98%\n',
    icon: (
      <Box
        component={'img'}
        height={62}
        width={62}
        src={
          'https://nsdstaticasset.blob.core.windows.net/assets/Qore_Icons/1-138.png'
        }
      />
    ),
  },
  {
    title: '#1 Ranked Independent Motor Club',
    subtitle:
      'Dedicated employee owned company vested in creating a best-in-class experience for every customer and client.  \n' +
      '\n' +
      'Customer satisfaction score = 98%\n',
    icon: (
      <Box
        component={'img'}
        height={70}
        src={
          'https://nsdstaticasset.blob.core.windows.net/assets/Qore_Brand_Icons/dealerQoreAppIcon.png'
        }
      />
    ),
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Who is Nation Safe Drivers?
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            For more than half of a century, Nation Safe Drivers (NSD) has been
            providing America’s small businesses with the transportation
            utilities needed to serve customers, the insurance needed to protect
            people’s most valuable commodities, the benefits needed to enhance
            warranties, and the products need to sustain society
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={Card}
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              p={4}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
