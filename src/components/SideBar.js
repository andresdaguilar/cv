import React, { useState } from 'react';
import { Box, styled,  Typography } from '@mui/material';




const SideBar = styled(Box)({
  minWidth: "25%",
  backgroundColor: "grey",
  justifyContent: "flex-start",
  gap: "10px",
});


const Header = () => {
  return (
    <SideBar>  
      <Typography>
        Andres Aguilar
      </Typography>
    </SideBar>
  )
}

export default Header;