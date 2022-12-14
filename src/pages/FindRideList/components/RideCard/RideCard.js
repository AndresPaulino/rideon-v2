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
              <Chip label='16 days left' />
            </Grid>
            <Grid item minWidth={150}>
              <Typography xs={4} sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
                Distance
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
            <Grid item minWidth={150}>
              <Typography xs={4} sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
                Dec 24, 2022
              </Typography>
            </Grid>
            <Grid item minWidth={150}>
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
      <Box pt={4}>
        <Typography xs={4} sx={{ fontSize: 16, textAlign: 'right' }} color='text.secondary' gutterBottom>
          14752 SW 26th St,
          <br />
          Miami, FL 33175
        </Typography>
      </Box>
      <Box pt={2}>
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
        {mockTags.map((tag) => (
          <Chip
            label={tag}
            onClick={handleClick}
            sx={{
              m: 0.10,
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
        minWidth: 275,
        backgroundColor: 'background.level1',
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
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
