import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import {Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from '../../assets/instagram.png';
import {  useNavigate } from "react-router-dom";


const Footer = ()=>{

    const navigate =useNavigate()

    const Footer_links = [{
        path: '/guides',
        display: 'Guide'
    },
    {
        path: '/service',
        display: 'Service'
    },
    {
        path: '/contact',
        display: 'Contact Us'
    },
]

    const Footer_links1 = [{
    
        path: '/location',
        display: 'Location'
    },
    {
        path: '/partnership',
        display: 'Partnership'
    },
    {
        path: '/terms',
        display: 'Terms of Use & Privacy policy'
    },
    

]
    const CustomContainer = styled (Container)(({theme})=>({
        display : "flex",
        justifyContent :"space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            textAlign:"center",
        },
    }));


    const IconBox = styled(Box)(({theme})=>({
        display : "flex",
        justifyContent :"center",
        gap:"1rem",
        [theme.breakpoints.down("sm")]:{
            justifyContent:"center",
        },
    }));

    const FooterLink = styled("span")(({theme})=>({
        fontSize:"16px",
        color:"#000066",
        fontWeight:"300",
        cursor:"pointer",
        [theme.breakpoints.down("sm")]:{
            justifyContent:"center",
        },
        "&:hover": {
            color:"#66B2FF",
        },
    }));

    return (
        <Box sx={{ py:8, backgroundColor:"#FFF6B2"}}>

            <CustomContainer>
                <Box>
                    <Typography
                    sx={{
                        fontSize:"20px",
                        color:"1C1C1D",
                        mb:2,
                    }}
                    >
                        Featured
                    </Typography>
                   
                    {
                        Footer_links.map((item, index) => (
                            <FooterLink variant="body2" onClick={()=>navigate(item.path)}
                            sx={{
                                display:"flex",
                                justifyContent:"space-between",
                                alignItems:"center",
                                mt:2,
                                mb:1,
                            }}
                            
                            >

                                {item.display}
                            </FooterLink>

                        ))
                    }
                    
                    

                </Box>

                <Box>
                <Typography
                    sx={{
                        fontSize:"20px",
                        color:"1C1C1D",
                        mb:2,
                    }}
                    >
                      Overview
                    </Typography>
                    {
                        Footer_links1.map((item, index) => (
                            <FooterLink variant="body2" onClick={()=>navigate(item.path)}
                            sx={{
                                display:"flex",
                                justifyContent:"space-between",
                                alignItems:"center",
                                mt:2,
                                mb:1,
                            }}
                            
                            >

                                {item.display}
                            </FooterLink>

                        ))
                    }
                </Box>

                <Box>
                <Typography
                    sx={{
                        fontSize:"20px",
                        color:"1C1C1D",
                        mb:2,
                    }}
                    >
                      Get in Touch
                    </Typography>
                    <Typography
                    sx={{
                        fontSize:"16px",
                        color:"7A7A7E",
                        mb:2,
                    }}
                    >
                     Keep in touch with our social media pages.
                    </Typography>

                    <IconBox>
                        <img src={fbIcon} alt="fbIcon" style={{ cursor : "pointer"}}/>
                        <img
                        src={twitterIcon}
                        alt="linkedInIcon"
                        style={{cursor:"pointer"}}
                        />
                        <img
                        src={instagramIcon}
                        alt="linkedInIcon"
                        style={{cursor:"pointer"}}
                        />
                    </IconBox>
                    
                </Box>
            </CustomContainer>


        </Box>

    );

};

export default Footer;