import Container from 'components/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, useMediaQuery, Checkbox, FormControlLabel, FormGroup, Button } from '@mui/material';

function FilterOptions() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          lg: 'flex',
        },
        flexDirection: 'column',
      }}
    >
      <FormGroup>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography
            sx={{
              textDecoration: 'underline',
            }}
            variant='h6'
            color='text.secondary'
            gutterBottom
          >
            Filter Options
          </Typography>
          <Button
            variant='contained'
            sx={{
              padding: 0,
              textTransform: 'capitalize',
            }}
            color='primary'
          >
            Clear All
          </Button>
        </Box>

        <Box my={2}>
          <Typography
            sx={{
              textDecoration: 'underline',
            }}
            variant='h6'
            color='text.secondary'
            gutterBottom
          >
            Tags
          </Typography>
          <FormControlLabel control={<Checkbox />} label='Beginner Friendly' />
          <FormControlLabel control={<Checkbox />} label='Experienced' />
          <FormControlLabel control={<Checkbox />} label='Cruiser' />
          <FormControlLabel control={<Checkbox />} label='Sports Bike' />
          <FormControlLabel control={<Checkbox />} label='City' />
          <FormControlLabel control={<Checkbox />} label='Highway' />
        </Box>
      </FormGroup>
    </Box>
  );
}

export default FilterOptions;
