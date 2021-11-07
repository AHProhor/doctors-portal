import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings= [
    {
        id:1,
        name:'Teeth OrthoDontics',
        time:'8:00AM - 9:00AM',
        space:10
    },
    {
        id:2,
        name:'Cosmetic Dentistry',
        time:'10:05AM - 11:30AM',
        space:10
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time:'5:00PM - 6:30PM',
        space:10
    },
    {
        id:4,
        name:'Cavity Protection',
        time:'7:00AM - 8:30AM',
        space:10
    },
    {
        id:5,
        name:'Teeth OrthoDontics',
        time:'8:00AM - 9:00AM',
        space:10
    },
    {
        id:6,
        name:'Teeth OrthoDontics',
        time:'8:00AM - 9:00AM',
        space:10
    }
]


const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{my:6}} style={{color:'#08E0D3',fontWeight:'700', fontSize:'40px'}}>Available Appoinement On - {date.toDateString()} </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    sendBooking={booking}
                    date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;