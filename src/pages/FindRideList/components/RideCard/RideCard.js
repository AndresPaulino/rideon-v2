import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Grid } from '@mui/material';

// icons
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const mockTags = ['tag1', 'tag2', 'tag3', 'tag4'];

const CardLeft = () => {
  return (
    <Grid item>
      <Avatar
        sx={{
          width: 56,
          height: 56,
          bgcolor: 'primary.main',
        }}
      >
        R
      </Avatar>
    </Grid>
  );
};

const CardMiddle = () => {
  return (
    <Grid item>
      <Grid
        container
        direction='row'
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Grid item>
          <Typography xs={12} fontSize={38} color='text.secondary' gutterBottom>
            Ride Title
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            direction='row'
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Grid item minWidth={150}>
              <Chip icon={<ScheduleIcon />} label='16 days left' />
            </Grid>
            <Grid item minWidth={150} display={'flex'}>
              <InfoIcon sx={{ mr: 1 }} />
              <Typography
                xs={4}
                sx={{
                  fontSize: 16,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: 'primary.main',
                  },
                }}
                color='text.secondary'
                gutterBottom
              >
                View Details
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            direction='row'
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Grid item minWidth={150} display={'flex'}>
              <CalendarMonthIcon sx={{ mr: 1 }} />
              <Typography xs={4} sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
                Dec 24, 2022
              </Typography>
            </Grid>
            <Grid item minWidth={150} display={'flex'}>
              <PersonIcon sx={{ mr: 1 }} />
              <Typography xs={4} sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
                22 participants
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CardRight = () => {
  const handleClick = () => {
    alert('You clicked the Chip.');
  };
  return (
    <Box
      pt={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      }}
    >
      <Box>
        <Button variant='contained'>Join Ride</Button>
      </Box>
      <Box pt={4} display={'flex'}>
        <FlagIcon sx={{ mr: 1 }} />
        <Typography xs={4} sx={{ fontSize: 16, textAlign: 'right' }} color='text.secondary' gutterBottom>
          14752 SW 26th St,
          <br />
          Miami, FL 33175
        </Typography>
      </Box>
      <Box pt={2} display={'flex'}>
        <SportsScoreIcon sx={{ mr: 1 }} />
        <Typography xs={4} sx={{ fontSize: 16, textAlign: 'right' }} color='text.secondary' gutterBottom>
          14752 SW 26th St,
          <br />
          Miami, FL 33175
        </Typography>
      </Box>
      <Box
        pt={2}
        maxWidth={200}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
        }}
      >
        <LocalOfferIcon fontSize='small' sx={{ mr: 1, my: 'auto' }} />
        {mockTags.map((tag) => (
          <Chip
            label={tag}
            onClick={handleClick}
            sx={{
              m: 0.1,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default function RideCard() {
  return (
    <Card
      sx={{
        border: '1px solid #E5E5E5',
        borderLeft: '4px solid',
        minWidth: 275,
        backgroundColor: 'background.level1',
        '&:hover': {
          transform: 'scale(1.01)',
        },
        marginBottom: 2,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
        }}
      >
        <Grid
          container
          direction='row'
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <CardLeft />
          <CardMiddle />
          <Box sx={{ flexGrow: 1 }} />
          <CardRight />
        </Grid>
      </CardContent>
    </Card>
  );
}
