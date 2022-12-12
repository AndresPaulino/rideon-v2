/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NestedItem from '../NestedItem';

const NavItem = ({ title, items }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () =>
    items ? items.find((i) => i.href === activeLink) : null;

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography
            fontWeight={hasActiveLink() ? 600 : 400}
            color={hasActiveLink() ? 'primary' : 'text.primary'}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
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
                        color:
                          activeLink === p.href
                            ? theme.palette.primary.main
                            : theme.palette.text.primary,
                        backgroundColor:
                          activeLink === p.href
                            ? alpha(theme.palette.primary.main, 0.1)
                            : 'transparent',
                        fontWeight: activeLink === p.href ? 600 : 400,
                      }}
                    >
                      {p.title && p.nested ? (
                        <NestedItem title={p.title} items={p.nested} />
                      ) : (
                        p.title
                      )}
                    </Button>
                  </Grid>
                ))
              : null}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

NavItem.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavItem;
