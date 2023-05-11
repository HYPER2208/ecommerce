
import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "8rem",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        // paddingBottom: "1rem",
        position:'absolute',
       bottom:0,
       marginBottom:0
      }}
    >
      <Container maxWidth="lg">
        <Grid container  >
          <Grid item xs={12} sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Typography color="black" variant="h5">
                Ecommerce            
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Home | Orders | About US`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} spacing={2} sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <Box  sx={{display:{ xs:'none',sm: "none",md:"block"}, marginX:'10%'}}>
            <Typography>Connect with us on </Typography>
            </Box>
            <Box >
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GoogleIcon />
            <LinkedInIcon />
            </Box>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

