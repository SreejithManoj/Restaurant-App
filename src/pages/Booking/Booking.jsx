import React from 'react';
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import buyIcon from '../../assets/buy_icon.png';
import sellIcon from '../../assets/sell_icon.png';
import rentIcon from '../../assets/sell_icon.png'

import ArrowRightIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "../../components/CustomButton/CustomButton";

function Booking() {
    const CustomBox = styled(Box)(({ theme }) => ({
        width: "90%",
        [theme.breakpoints.down("md")]: {
            width: "85%",
        },
    }));

    const GuidesBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: "0",
            flexDirection: "column",
        },
    }));

    const GuideBox = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        algnitems: "center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(2, 0, 2, 0),
            alignItems:"center",
        },

    }));
    return (
        <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px"
        }}>

            <div
                style={{
                    width: "5%",
                    height: "5px",
                    backgroundColor: "#000339",
                    margin: "0 auto",
                }}
            >

            </div>
            <Typography
                variant='h3'
                sx={{ fontSize: "35px",  fontWeight: "bold",  color: "#000339",  my: 3}}
                >
                How to Book?
            </Typography>
            <CustomBox>
                <Typography
                    variant='body2'
                    sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#5A6473",
                        textAlign: "center",
                    }}>
                    Everything you need to know when you book for advance slot

                </Typography>

            </CustomBox>
            <GuidesBox>
                <GuideBox>
                    <img src={buyIcon} alt='buyIcon' width={90} height={80} />
                    <Typography
                        variant='body2'
                        sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#3B3c45",
                            my: 1,
                        }}>
                        Order Guides

                    </Typography>
                    <Box
                        sx={{
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography
                            variant='body2'
                            sx={{ fontWeight: "bold", fontSize: "14px", color: "#0089FF" }}>
                            How to Order
                        </Typography>
                        <ArrowRightIcon style={{ color: "#B6B9FF" }} />

                    </Box>
                </GuideBox>
                <GuideBox>
                    <img src={sellIcon} alt='buyIcon' width={90} height={80} />
                    <Typography
                        variant='body2'
                        sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#3B3c45",
                            my: 1,
                        }}>
                        Booking Guides

                    </Typography>
                    <Box
                        sx={{
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography
                            variant='body2'
                            sx={{ fontWeight: "bold", fontSize: "14px", color: "#0089FF" }}>
                            How to Book
                        </Typography>
                        <ArrowRightIcon style={{ color: "#B6B9FF" }} />

                    </Box>
                </GuideBox>
                <GuideBox>
                    <img src={rentIcon} alt='buyIcon' width={90} height={80} />
                    <Typography
                        variant='body2'
                        sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#3B3c45",
                            my: 1,
                        }}>
                        Payment Guides
                    </Typography>
                    <Box
                        sx={{
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography
                            variant='body2'
                            sx={{ fontWeight: "bold", fontSize: "14px", color: "#0089FF" }}>
                            Payment method
                        </Typography>
                        <ArrowRightIcon style={{ color: "#B6B9FF" }} />

                    </Box>
                </GuideBox>


            </GuidesBox>
            <CustomButton
                backgroundColor="#0F1B4C"
                color="#FFF"
                buttonText="See Full Guides"
                guidebtn={true} />



        </Box>
    );
};

export default Booking;