
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({openBooking, handleClose, sendBooking,date}) => {
    const {name,time} = sendBooking;

    const handelBookingSubmit = e =>{
        alert('submitting');

        
        handleClose();
        e.preventDefault();
    }
    return (
        <Modal
        open={openBooking}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Service: {name}
          </Typography>
          <form onSubmit={handelBookingSubmit}>
                <TextField
                disabled
                sx={{width:'100%',m:1}}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                />
                <TextField
                sx={{width:'100%',m:1}}
                id="outlined-size-small"
                defaultValue="Your Name Please"
                size="small"
                />
                <TextField
                sx={{width:'100%',m:1}}
                id="outlined-size-small"
                defaultValue="Your Phone Number Please"
                size="small"
                />
                <TextField
                sx={{width:'100%',m:1}}
                id="outlined-size-small"
                defaultValue="Your Email Please"
                size="small"
                />
                <TextField
                disabled
                sx={{width:'100%',m:1}}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
                />
                <Button type="submit" variant="contained" sx={{width:'30%',m:1}} style={{backgroundColor:'#08E0D3', marginTop:'10px'}}>
                    Submit
                </Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;