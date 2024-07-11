import { observer } from "mobx-react-lite";
import adminDetailsStore from "../../store/adminDetails.js";
import EditBusinessData from "./EditBusinessData.jsx";
import { useState } from "react";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Container, Button, Grid } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";

import BusinessDataStore from "../../store/BusinessDataStore.js";



const BusinessData = observer(() => {
  const { isAdmin } = adminDetailsStore;
  const [isEdit, setIsEdit] = useState(false);
  const { businessDataDetails } = BusinessDataStore;
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };


  return (
    <>
      <>
        {isEdit ? (
          <EditBusinessData onClose={()=>{setIsEdit(false)}} />
        ) : (
          <>
    <AppBar position="static" sx={{ backgroundColor: '#333', borderBottom: '2px solid #00bcd4' }}>
      <Toolbar>
     
                
              <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6} style={{ position: "fixed", left: 150, top: 50, borderColor: "black" }}>
          <Button>
          {!isAdmin && <button onClick={goToLogin}>כניסת מנהל</button>}
          </Button>
        </Grid>
        <Grid item xs={12} textAlign="center">
         
        </Grid>
         
        </Grid>
         
        <Typography variant="body1" component="div" sx={{ fontFamily: 'Roboto', letterSpacing: '1px' }}>
          {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Roboto', letterSpacing: '1px' }}>
        <p>{businessDataDetails.name}   </p>
        </Typography> */}
        <p style={{color:"#efaf19aa"}} >{businessDataDetails.owner}</p>
            <p style={{color:"#efaf19aa"}} >{businessDataDetails.address}</p>
            <p style={{color:"#efaf19aa"}}>{businessDataDetails.phone}</p>
            <img src={businessDataDetails.logo} style={{ width: "1200px" }} />
            {/* <img src={businessDataDetails.logo} style={{ width: "100px" }} /> */}
           
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Roboto', letterSpacing: '1px' }}>
        <p>{businessDataDetails.name}</p>
        </Typography>
            <p>{businessDataDetails.description}</p>
        </Typography>
      </Toolbar>
       {isAdmin && <button onClick={() => setIsEdit(true)}>עדכון</button>}
       
    </AppBar>
           
          </>
        )}

       
      </>
    </>
  );
});
export default BusinessData;


