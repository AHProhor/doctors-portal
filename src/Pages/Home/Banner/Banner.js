import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const bannerBg = {
    background :`url(${bg})`,
    
}

const verticale ={
    display: 'flex',
    alignItems: 'center',
    height: 500,
}
const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 , mt:5}}>
            <Grid container spacing={2}>
                    <Grid item style={{...verticale, textAlign:'left'}} xs={12} md={6}> 
                         <Box sx={{mx:8}}>
                         <Typography variant="h2" sx={{fontWeight:900}}>
                            Your New Smile <br/>
                            Starts Here
                         </Typography>  
                         <Typography variant="h6" sx={{fontSize:14, my:5, fontWeight: 300, color:'gray'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni consequatur iusto soluta autem quas dolore tenetur cumque placeat, dicta eligendi?
                         </Typography> 
                         <Button variant="contained" style={{backgroundColor:'#08E0D3'}}>
                        Take Appoinment
                        </Button>
                        </Box> 
                    </Grid> 
                <Grid item xs={12} md={6} style={verticale}>
                    <img src={chair}
                        style={{
                            width: 550
                        }}
                    alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;