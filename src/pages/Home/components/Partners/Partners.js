import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const mock = [
  {
    logo: 'https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png',
    name: 'Microsoft Azure',
  },
  {
    logo: 'https://brand.segment.com/site-assets/54198ddc/images/brand-guidelines/content/twilio/twilio-segment-vertical-logo.png',
    name: 'Segment',
  },
  {
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png',
    name: 'Atlassian',
  },
  {
    logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
    name: 'Google',
  },
  {
    logo: 'https://www.pngitem.com/pimgs/m/287-2879916_microsoft-onedrive-icon-onedrive-logo-png-transparent-png.png',
    name: 'OneDrive',
  },
  {
    logo: 'https://cdn.svgporn.com/logos/twilio-icon.svg',
    name: 'Twilio',
  },
];

const Partners = () => {
  const theme = useTheme();
  const history = useNavigate();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
          >
            Integrations
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            We help the leading brands integrate with our platform.
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            NSD strives to provide the greatest partner experience. This can
            only be achieved by ensuring the quickest possible service in every
            stage.
          </Typography>
        </Box>
      </Grid>
      <Grid item container spacing={2} xs={12} md={6}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={4}
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Card>
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 3,
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    height={50}
                    width={50}
                    src={item.logo}
                    alt={item.name}
                    effect="blur"
                  />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Partners;
