/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const NavItem = ({ title, items, activeLink, href }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [active, setActive] = useState('');

  const hasActiveLink = () => {
    return active === activeLink;
  };

  useEffect(() => {
    setActive(window && window.location ? window.location.pathname : '');
  }, []);

  const handleClick = () => {
    navigate(href);
  };

  return (
    <Box>
      <Accordion disableGutters elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary aria-controls='panel1a-content' id='panel1a-header' sx={{ padding: 0 }}>
          <Button
            size={'large'}
            component={'a'}
            href={activeLink.href}
            fullWidth
            onClick={handleClick}
            sx={{
              justifyContent: 'flex-start',
              color: hasActiveLink() ? theme.palette.primary.main : 'common.white',
              backgroundColor: hasActiveLink() ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.9),
              },
              fontWeight: activeLink === activeLink.href ? 600 : 400,
            }}
          >
            {title}
          </Button>
        </AccordionSummary>
        {/* <AccordionDetails sx={{ padding: 0 }}>
          <Grid container spacing={1}>
            {items
              ? items.map((p, i) => (
                  <Grid item key={i} xs={12}>
                    <Button
                      size={'large'}
                      component={'a'}
                      href={p.href}
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        color: activeLink === p.href ? theme.palette.primary.main : theme.palette.text.primary,
                        backgroundColor: activeLink === p.href ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                        fontWeight: activeLink === p.href ? 600 : 400,
                      }}
                    >
                      {p.title && p.nested ? <NestedItem title={p.title} items={p.nested} /> : p.title}
                    </Button>
                  </Grid>
                ))
              : null}
          </Grid>
        </AccordionDetails> */}
      </Accordion>
    </Box>
  );
};

export default NavItem;
