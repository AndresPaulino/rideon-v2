import React, { useState } from 'react';
import * as yup from 'yup';
import { TextField, Button, Typography, Box, Grid, Autocomplete } from '@mui/material';
import { useFormik } from 'formik';

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
    startLocation: '',
    endLocation: '',
    date: '',
    time: '',
    tags: [],
  };

  const rideTags = [
    { title: 'Beginner Friendly' },
    { title: 'Experienced' },
    { title: 'City' },
    { title: 'Highway' },
    { title: 'Sports Bike' },
    { title: 'Cruiser' },
  ];

  const onSubmit = (values) => {
    setIsSubmitting(true);
    console.log(values);

    setIsSubmitting(false);
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
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            InputLabelProps={{
              shrink: true,
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
          <TextField
            name='startLocation'
            label='Start Location'
            fullWidth
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.startLocation}
            error={formik.touched.startLocation && Boolean(formik.errors.startLocation)}
            helperText={formik.touched.startLocation && formik.errors.startLocation}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='endLocation'
            label='End Location'
            fullWidth
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.endLocation}
            error={formik.touched.endLocation && Boolean(formik.errors.endLocation)}
            helperText={formik.touched.endLocation && formik.errors.endLocation}
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
            getOptionLabel={(option) => option.title}
            ListboxProps={{
              sx: {
                color: 'white',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='tags'
                placeholder='Tags'
                onChange={formik.handleChange}
                value={formik.values.tags}
              />
            )}
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
