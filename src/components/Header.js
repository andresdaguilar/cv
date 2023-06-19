import React, { useState } from 'react';
import { Box, styled,  Typography, Grid } from '@mui/material';
import  HexagonWithImage  from './Photo';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const HeaderTitle = styled(Box)({
  minHeight: "80px",
  backgroundColor: "#548ca8",
  justifyContent: "flex-start",
  textAlign: "left",
  padding: "20px",
  gap: "10px",
  color: "white"
});

const Item = styled(Box)({
  textAlign: "left",  
})


const Header = () => {
  return (
    <HeaderTitle>  
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <HexagonWithImage src={"/profile_transparent.png"}/>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h4" sx={{marginTop: "20px"}}>
            Andres Aguilar
          </Typography>
          <Typography variant="h6">
            System Engineer
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{fontSize: "12px", marginTop: "20px"}}>
          <Typography sx={{fontSize: "13px"}}>
            <EmailIcon sx={{ fontSize: 10 }}/> andresd.aguilar@gmail.com
          </Typography>
          <Typography sx={{fontSize: "13px"}}>
            <LocalPhoneIcon sx={{ fontSize: 10 }}/> +549 341 3523631
          </Typography>
          <Typography sx={{fontSize: "13px"}}>
            <LocationOnIcon sx={{ fontSize: 10 }}/> Argentina
          </Typography>
          <Typography sx={{fontSize: "13px"}}>
            <LinkedInIcon sx={{ fontSize: 10 }}/> www.linkedin.com/in/andresaguilar
          </Typography>
        </Grid>
      </Grid>
    </HeaderTitle>
    
  )
}

export default Header;