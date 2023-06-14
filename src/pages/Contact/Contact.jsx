import React from 'react';
import { Box ,Typography} from "@mui/material";
import {Container} from "@mui/system";
import {styled} from "@mui/system";
import contact from "../../assets/contact.jpg";

function Contact() {
    const Title = styled(Typography)(({theme})=>({
        fontSize:"64px",
        color:"#fff",
        fontWeight:"bold",
        margin:theme.spacing(4,0,4,0),
        [theme.breakpoints.down("sm")]:{
            fontSize:"40px",
        },


    }));
    const CustomBox = styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"center",
        gap:theme.spacing(5),
        marginTop:theme.spacing(1),
        [theme.breakpoints.down("md")]:{
            flexdirection:"column",
            alignitems:"center",
            textAlign:"center",
            width:"85%",
            
        },
    }));
  return (
    <Box sx={{ backgroundColor:"#bb9de0", minHeight:"60vh"}}>
    <Container>
        <CustomBox>
            <Box sx={{ flex:"1"}}>
               
                <Title variant="h1">
         Contact Us
                </Title>
                <Typography
                variant="body2"
                sx={{ fontSize:"28px", color:"#00000",my:4}}
                >
                We'd Love to hear from you.
                </Typography>
                <br/>
                <Typography
                variant="body2"
                sx={{ fontSize:"18px", color:"#00000",my:4}}
                >

                call : +6500 - 0XXX - XXX
                mail@leskydinewhere@gmail.com
                </Typography>

                
            

            </Box>
            <Box sx={{ flex:"1.25"}}>
         <img src={contact}
         alt="welcome"
         style={{ maxWidth:"100%", marginBottom:"2rem"}}/>
          </Box>
            
        </CustomBox>
    </Container>

</Box>
  );
};

export default Contact