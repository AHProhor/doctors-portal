import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({sendBooking, date}) => {
    const {name,time,space} = sendBooking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
            <Typography style={{color:'#08E0D3',fontWeight:'800'}} variant="h5" gutterBottom component="div">
        	    {name}
            </Typography><Typography variant="h6" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
        	    {space} SPACES AVAILABLE
            </Typography> 
            <Button onClick={handleBookingOpen} variant="contained" style={{backgroundColor:'#08E0D3', marginTop:'10px'}}>
            Book Appointment
            </Button>
            </Paper>
        </Grid>
        <BookingModal
        sendBooking={sendBooking}
        openBooking={openBooking}
        handleClose={handleClose}
        date={date}
        ></BookingModal>
        </>
    );
};

export default Booking;