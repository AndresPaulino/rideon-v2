import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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

// AuthContext
import { useAuthContext } from 'hooks/useAuthContext';

const CardLeft = ({ ride }) => {
  const { rideAvatar } = ride;
  return (
    <Grid item>
      <Avatar
        sx={{
          width: 56,
          height: 56,
          bgcolor: 'primary.main',
        }}
      >
        {rideAvatar}
      </Avatar>
    </Grid>
  );
};

const CardMiddle = ({ ride }) => {
  const { rideTitle, rideDate, rideParticipants, rideTime } = ride;
  // change rideDate to date format
  const date = new Date(rideDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // change 24h rideTime to time 12 format
  const time = (time) => {
    const [hours, minutes] = time.split(':');
    const timeValue = `${hours > 12 ? hours - 12 : hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
    return timeValue;
  };

  // calculate days left until rideDate
  const daysLeft = (date) => {
    const today = new Date();
    const rideDate = new Date(date);
    const diffTime = Math.abs(rideDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

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
            {rideTitle}
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
              <Chip icon={<ScheduleIcon />} label={`${daysLeft(rideDate)} days left`} />
            </Grid>
            <Grid item minWidth={150} display={'flex'}>
              <InfoIcon sx={{ mr: 1 }} />
              <Typography xs={4} color='text.secondary' gutterBottom>
                {time(rideTime)}
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
                {date}
              </Typography>
            </Grid>
            <Grid item minWidth={150} display={'flex'}>
              <PersonIcon sx={{ mr: 1 }} />
              <Typography xs={4} sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
                {rideParticipants.length} participants
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CardRight = ({ ride }) => {
  const { joinRide, leaveRide, user } = useAuthContext();

  const { rideTags, endLocation, startLocation } = ride;

  const [joined, setJoined] = useState();

  // check if user is in the ride
  const isUserInRide = ride.rideParticipants.includes(user.uid);

  const handleJoinRide = () => {
    joinRide(user.uid, ride.rideId);
    setJoined(true);
  };

  const handleLeaveRide = () => {
    leaveRide(user.uid, ride.rideId);
    setJoined(false);
  };

  useEffect(() => {
    setJoined(isUserInRide);
  }, [isUserInRide]);

  const location = (location) => {
    const [street, city, state] = location.split(',');
    return (
      <>
        {street}
        <br />
        {city}, {state}
      </>
    );
  };

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
        {joined ? (
          <Button variant='contained' color='secondary' onClick={handleLeaveRide}>
            Leave Ride
          </Button>
        ) : (
          <Button variant='contained' onClick={handleJoinRide}>
            Join Ride
          </Button>
        )}
      </Box>
      <Box pt={4} display={'flex'}>
        <FlagIcon sx={{ mr: 1 }} />
        <Typography xs={4} sx={{ fontSize: 16, textAlign: 'left' }} color='text.secondary' gutterBottom>
          {location(startLocation)}
        </Typography>
      </Box>
      <Box pt={2} display={'flex'}>
        <SportsScoreIcon sx={{ mr: 1 }} />
        <Typography xs={4} sx={{ fontSize: 16, textAlign: 'left' }} color='text.secondary' gutterBottom>
          {location(endLocation)}
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
        {rideTags.map((tag) => (
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

export default function RideCard({ ride }) {
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
          <CardLeft ride={ride} />
          <CardMiddle ride={ride} />
          <Box sx={{ flexGrow: 1 }} />
          <CardRight ride={ride} />
        </Grid>
      </CardContent>
    </Card>
  );
}
