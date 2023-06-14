import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/logo.png';


import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServiceIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {  useNavigate } from 'react-router-dom';


function Header() {
    const [mobileMenu, setMobileMenu] = useState({left : false})
    

    const navigate = useNavigate()
    
    const toogleDrawer = (anchor,open)=>(event)=>{
        if(event.type === "keydown" && (event.type === "Tab"  || event.type === "shift")){
            return;
        }

        setMobileMenu({...mobileMenu,[anchor]:open})
    }

    const list =(anchor)=>(
        <Box sx={{
            width:anchor === "top" || anchor === "bottom" ? "auto" :250

            
        }}
            role="presentation"
            onClick={toogleDrawer(anchor,false)}
            onKeyDown = {toogleDrawer(anchor,false)}
        
        >

         <List>
            {
                nav_title.map((item,index)=>(
                    <ListItem key={item.index} disablepadding onClick={()=>navigate(item.path)}>
                <ListItemButton>
                    <ListItemIcon>
                        {
                            index === 0 && <HomeIcon/>
                        }
                         {
                            index === 1 && <FeaturedPlayListIcon/>
                        }
                         {
                            index === 2 && <MiscellaneousServiceIcon/>
                        }
                         {
                            index === 3 && <ContactsIcon/>
                        }
                    
                    </ListItemIcon>
                    <ListItemText primary={item.display}/>
                </ListItemButton>
            </ListItem>

            ))
            }
            
         </List>


        </Box>
    )

    const nav_title = [{
        path: '/',
        display: 'Home'
    },
    {
        path: '/dishes',
        display: 'Dishes'
    },
    {
        path: '/service',
        display: 'Service'
    },
    {
        path: '/about',
        display: 'About Us'
    }
    ]

    

    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },


    }));

    const NavBarLink = styled(Typography)(() => ({
        fontSize: "15px",
        color: "#4F5361",
        fontWeight: "bold",
        cursor: "pointer",
        '&:hover': {
            color: "#fff"

        }
    }));

    const NavBarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },


    }));

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block",
        },


    }));

   
    return (
        <Box

            sx={{

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "auto",
                padding: "40px",
                backgroundColor: "#FED801",
                marginLeft: '0px',
                marginBottom: "-24px"

            }}

        >

            <Box

                sx={{

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem"

                }}>

                <Box

                    sx={{

                        display: "flex",
                        alignItems: "center",


                    }}>

                    <CustomMenuIcon onClick={toogleDrawer("left",true)} />
                    <Drawer 
                    anchor='left'
                    open={mobileMenu["left"]}
                    onClose={toogleDrawer("left",false)}>

                        {list("left")}


                        
                    </Drawer>
                    <NavBarLogo src={logoImg} style={{ maxWidth:"100%",  borderRadius: "50%"}} />

                </Box>
                <NavBarLinksBox>
                    {
                        nav_title.map((item, index) => (
                            <NavBarLink variant="body2" onClick={()=>navigate(item.path)}>
                                {item.display}
                            </NavBarLink>

                        ))
                    }


                </NavBarLinksBox>

            </Box>
            <Box

                sx={{

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem"

                }}



            >
                <NavBarLink variant="body2">
                    Sign up
                </NavBarLink>
                <CustomButton
                    backgroundColor="#0F1B4C"
                    color="#fff"
                    buttonText="Register"


                />



            </Box>

        </Box>


    )
}

export default Header