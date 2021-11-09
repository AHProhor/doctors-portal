import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser,isLoading} = useAuth();
    const handelOnchange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handelLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Please Give the Corect Password');
            return;
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom style={{color:'#08E0D3', marginTop:'10px'}}>
                        Register
                    </Typography>
                    {
                        !isLoading && <form onSubmit={handelLoginSubmit}>
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
                        <TextField
                             sx={{width: "75%", m:1}}
                             id="standard-basic"
                             type="password" 
                             name="password2"
                             onChange={handelOnchange}
                             label="Confirm Password" 
                             variant="standard" 
                             />
                             
                        <Button sx={{width: '75%', m:1}} variant="contained" type="submit" style={{backgroundColor:'#08E0D3', marginTop:'10px'}}>
                        Login
                        </Button>
                        <NavLink 
                        to="/login"
                        style={{textDecoration:"none"}}>
                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink> 
                    </form>
                    }
                    {isLoading && <CircularProgress />}
                </Grid>
                <Grid item xs={12} md={6}>
                   <img style={{width:'100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;