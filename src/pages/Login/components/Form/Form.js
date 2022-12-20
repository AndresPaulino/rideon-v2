import { useState } from 'react';
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { useAuthContext } from 'hooks/useAuthContext';
// components
import Iconify from 'components/iconify';
import FormProvider, { RHFTextField } from 'components/hook-form';
import { Box } from '@mui/system';

// ----------------------------------------------------------------------

export default function AuthLoginForm() {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.log('this is here');
    }

    reset(defaultValues);

    return;
  };

  return (
    <Box bgcolor={'alternate.main'} padding={{ xs: 4, sm: 6 }} borderRadius={2}>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
        >
          Login
        </Typography>
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
          }}
        >
          Welcome back
        </Typography>
        <Typography color='text.secondary'>Login with your email and password.</Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}

          <RHFTextField name='email' label='Email address' />

          <RHFTextField
            name='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack alignItems='flex-end' sx={{ my: 2 }}>
          <Link component={RouterLink} to={'/'} variant='body2' color='inherit' underline='always'>
            Forgot password?
          </Link>
        </Stack>
        <Stack alignItems='flex-end' sx={{ my: 2 }}>
          <Link component={RouterLink} to={'/register'} variant='body2' color='inherit' underline='always'>
            Register new account
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          color='inherit'
          size='large'
          type='submit'
          variant='contained'
          sx={{
            bgcolor: 'primary.main',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'primary.dark',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Login
        </LoadingButton>
      </FormProvider>
    </Box>
  );
}
