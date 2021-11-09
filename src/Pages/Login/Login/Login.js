import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handelOnchange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handelLoginSubmit = e =>{
        alert('hi')
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom style={{color:'#08E0D3', marginTop:'10px'}}>
                        Login
                    </Typography>
                    <form onSubmit={handelLoginSubmit}>
                        <TextField
                             sx={{width: "75%", m:1}}
                             id="standard-basic" 
                             label="Email" 
                             name="email"
                             type="email"
                             onChange={handelOnchange}
                             variant="standard" 
                             />
                             <br />
                        <TextField
                             sx={{width: "75%", m:1}}
                             id="standard-basic"
                             type="password" 
                             name="password"
                             onChange={handelOnchange}
                             label="Password" 
                             variant="standard" 
                             />
                             
                        <Button sx={{width: '75%', m:1}} variant="contained" type="submit" style={{backgroundColor:'#08E0D3', marginTop:'10px'}}>
                        Login
                        </Button>
                        <NavLink 
                        to="/register"
                        style={{textDecoration:"none"}}>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink> 
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                   <img style={{width:'100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;