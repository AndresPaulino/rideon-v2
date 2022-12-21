import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateRideForm from './components/CreateRideForm';
import { useAuthContext } from 'hooks/useAuthContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!user) {
      alert('Please login to create a ride');
      return;
    }

    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>
        Create Ride
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box bgcolor={'white'} p={2} borderRadius={2}>
            <CreateRideForm />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
