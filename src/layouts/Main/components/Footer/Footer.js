import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { LinkedIn, YouTube } from '@mui/icons-material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  // const { mode } = theme.palette;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{
            xs: 'column',
            sm: 'row',
          }}
        >
          <Box display={'flex'} component='a' href='/' title='NSD' width={80}>
            <Box component={'img'} src={'/assets/logo.svg'} height={1} width={1} />
          </Box>
          <Box>
            <IconButton
              href={'/'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
              size='small'
              color={'primary'}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href={'/'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              size='small'
              color={'primary'}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href={'/'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              size='small'
              color={'primary'}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href={'/'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='YouTube'
              size='small'
              color={'primary'}
            >
              <YouTube />
            </IconButton>
          </Box>
          <Box display='flex' flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1}>
              <Button variant='text' size='small' color='primary' onClick={scrollToTop}>
                <KeyboardDoubleArrowUpIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align={'center'} variant={'subtitle2'} color='text.secondary' gutterBottom>
          &copy; RideOn. 2022, All rights reserved
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Tooltip
          title='Privacy Policy'
          placement='bottom'
          arrow
          color='primary'
          TransitionComponent={Zoom}
          sx={{
            [`& .${tooltipClasses.tooltip}`]: {
              backgroundColor: '#f5f5f9',
              color: 'rgba(0, 0, 0, 0.87)',
              maxWidth: 220,
              fontSize: theme.typography.pxToRem(12),
              border: '1px solid #dadde9',
            },
          }}
        >
          <Link
            align={'center'}
            variant={'subtitle1'}
            color={'primary'}
            gutterBottom
            href='/'
            display={'block'}
            target='_blank'
          >
            Privacy Policy
          </Link>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Footer;
