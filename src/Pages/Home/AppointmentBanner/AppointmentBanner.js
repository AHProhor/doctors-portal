import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import apponintment_Bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
const AppointmentBanner = () => {


    const appointmentBanner = {
        background: `url(${apponintment_Bg})`,
        marginTop: 150,
        backgroundColor:'rgba(45, 76, 104, 0.9 )',
        backgroundBlendMode: ' darken, luminosity',
        backgroundPosition: "center"
    }
    return (
        <Container style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid  container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                    style={{
                        width:'400',
                        height: '500px',
                        marginTop: '-150px',

                    }}
                     src={doctor} alt="appointment img" />

                </Grid>
                <Grid item xs={12} md={6} sx={{
                     display: 'flex',
                     justifyContent: 'flex-start',
                     textAlign:'left',
                     alignItems: 'center'
                      }}>
                    <Box>
                    <Typography variant='h5' sx={{mb:5}} style={{color:'#08E0D3'}}>
                        Appointment
                    </Typography>
                    <Typography variant='h4' style={{color:'white'}}>
                        Make An Appointment Today   
                    </Typography>
                    <Typography variant='h6' sx={{my:3}} style={{color:'white',fontSize:14, fontWeight:300}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In asperiores obcaecati voluptatem? Voluptas magni praesentium eaque perspiciatis nobis vero quidem.
                    </Typography>
                    <Button variant="contained" style={{backgroundColor:'#08E0D3'}}>
                        Learn more
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentBanner;