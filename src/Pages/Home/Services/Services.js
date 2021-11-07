import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name:'Fluoride Treatment',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatum possimus eveniet earum inventore?',
        img: fluoride
    },
    {
        name:'Cavity Filling',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatum possimus eveniet earum inventore?',
        img: cavity
    },
    {
        name:'Teeth Whitening',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatum possimus eveniet earum inventore?',
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                    <Typography sx={{ fontWeight: 500 ,color: 'info.main', m: 5  }} variant="h5" component="div">
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", m: 2 }} variant="h3" component="div">
                        Services We Provide
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                        key={service.name}
                        service = {service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;