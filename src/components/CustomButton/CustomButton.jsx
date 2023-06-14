import React from 'react'
import { styled } from '@mui/system';
import { Button } from "@mui/material";

const CustomButton = ({
    backgroundColor,
    color,
    buttonText,
    welcomebtn,
    guidebtn,
    getStartbtn,
}) => {

    const CustomButton = styled(Button)(({ theme }) => ({

        backgroundColor: backgroundColor,
        color: color,
        fontSize: "17px",
        cursor: "pointer",
        padding: "0.5rem 1.25rem",
        borderRadius: "7px",
        textTransform: "none",
        display: "block",
        border: "2px solid transparent",
        marginBottom:"10px",
        "& hover": {
            backgroundColor: color,
            color: backgroundColor,
            borderColor: backgroundColor,
        },
        [theme.breakpoints.down("sm")]: {
            margin: (welcomebtn || getStartbtn) && theme.spacing(0, "auto", 3, "auto"),
            width: (welcomebtn | getStartbtn) && "90%",

        },
        [theme.breakpoints.down("sm")]: {
            marginTop: guidebtn && theme.spacing(3),
            width: guidebtn && "50%",

        },

    }));
    return (
        <CustomButton>{buttonText}</CustomButton>
    );
};

export default CustomButton;