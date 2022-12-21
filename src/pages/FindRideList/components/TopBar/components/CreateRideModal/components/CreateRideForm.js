import React, { useState } from 'react';
import * as yup from 'yup';
import { TextField, Button, Typography, Box, Grid, Autocomplete } from '@mui/material';
import { useFormik } from 'formik';
import PlacesAutocomplete from './PlacesAutocomplete';

const CreateRideForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    startLocation: yup.string().required('Start location is required'),
    endLocation: yup.string().required('End location is required'),
    date: yup.string().required('Date is required'),
    time: yup.string().required('Time is required'),
  });

  const initialValues = {
    title: '',
    date: '',
    time: '',
    startLocation: '',
    endLocation: '',
    startCoords: {},
    endCoords: {},
    rideTags: [],
  };

  const rideTags = ['Beginner Friendly', 'Experienced', 'City', 'Highway', 'Sports Bike', 'Cruiser'];

  const onSubmit = (values) => {
    setIsSubmitting(true);
    console.log(values);

    setIsSubmitting(false);
  };

  const handleStartLocationChange = (value, coords) => {
    formik.setFieldValue('startLocation', value);
    formik.setFieldValue('startCoords', coords);
  };

  const handleEndLocationChange = (value, coords) => {
    formik.setFieldValue('endLocation', value);
    formik.setFieldValue('endCoords', coords);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Typography color='textPrimary' variant='h5'>
          Create Ride
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name='title'
            label='Title'
            fullWidth
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name='date'
            label='Date'
            type='date'
            fullWidth
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.date}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            InputLabelProps={{
              shrink: true,
              min: new Date().toISOString().slice(0, 10),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name='time'
            label='Time'
            type='time'
            fullWidth
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.time}
            error={formik.touched.time && Boolean(formik.errors.time)}
            helperText={formik.touched.time && formik.errors.time}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <PlacesAutocomplete
            handleStartLocationChange={handleStartLocationChange}
            fieldName='startLocation'
            fieldLabel='Start Location'
          />
        </Grid>
        <Grid item xs={12}>
          <PlacesAutocomplete
            handleEndLocationChange={handleEndLocationChange}
            fieldName='endLocation'
            fieldLabel='End Location'
          />
        </Grid>
        <Grid item xs={8}>
          <Autocomplete
            multiple
            limitTags={2}
            id='tags'
            sx={{
              backgroundColor: 'white',
            }}
            options={rideTags}
            getOptionLabel={(option) => option}
            onChange={(event, value) => formik.setFieldValue('rideTags', value)}
            ListboxProps={{
              sx: {
                color: 'white',
              },
            }}
            renderInput={(params) => <TextField {...params} label='tags' placeholder='Tags' />}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button type='submit' variant='contained' color='primary' disabled={isSubmitting}>
          Create Ride
        </Button>
      </Box>
    </form>
  );
};

export default CreateRideForm;
