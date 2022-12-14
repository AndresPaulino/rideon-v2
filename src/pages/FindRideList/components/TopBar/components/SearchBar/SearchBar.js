import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Select } from '@mui/material';

import CreateRideModal from '../CreateRideModal';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #c4c4c4',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSortChange = (event) => {
    console.log(event.target.value);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Typography>
          Sort by{' '}
          <Select defaultValue='Newest' sx={{ width: 120, zIndex: 10 }}>
            <MenuItem value='newest'>Newest</MenuItem>
            <MenuItem value='oldest'>Oldest</MenuItem>
            <MenuItem value='most-popular'>Most Popular</MenuItem>
          </Select>
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        padding: 0,
      }}
    >
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            backgroundColor: 'white',
            boxShadow: 'none',
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  color: '#c4c4c4',
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search???' inputProps={{ 'aria-label': 'search' }} />
          </Search>

          <Box sx={{ display: { xs: 'none', md: 'flex', marginRight: 4 } }}>
            <Typography
              sx={{
                color: '#c4c4c4',
              }}
            >
              Sort by{' '}
              <Select size='small' defaultValue='1' onChange={handleSortChange} sx={{ width: 120 }}>
                <MenuItem style={{ color: 'white' }} value='1'>
                  Newest
                </MenuItem>
                <MenuItem style={{ color: 'white' }} value='2'>
                  Oldest
                </MenuItem>
                <MenuItem style={{ color: 'white' }} value='3'>
                  Most Popular
                </MenuItem>
              </Select>
            </Typography>
          </Box>
          <Box minWidth={120}>
            <CreateRideModal />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='#c4c4c4'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
