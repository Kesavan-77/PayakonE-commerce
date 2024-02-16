import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PollIcon from '@mui/icons-material/Poll';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';


const Navbar = () => {
  const [value, setValue] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#ffff", color: "black", boxShadow: "5px 1px 5px #adadad",height:'70px'}}>
        <Container>
          <Toolbar>
            {isMatch ? (
              <>
                <NavLink to='/'>
              <img src={Logo} alt="logo" height="50px" width="auto" style={{ marginTop:"8px"}}/>
                </NavLink>
                <IconButton
                  sx={{ color: "#000", marginLeft: "auto" }}
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  <MenuIcon color="black" />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={openDrawer}
                  onClose={() => setOpenDrawer(false)}
                  >
                  <List sx={{width:'200px',textDecoration: 'none'}}>
                  <ListItemButton sx={{padding:'20px',"&:hover":{backgroundColor:'#fff'}}}>
                    <ListItemText ><img src={Logo} alt="logo" height="40px" width="auto"/></ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{padding:'20px',"&:hover":{color:'#6b3bc4',backgroundColor:'#f5f5fd',fontWeight:'bold'}}}>
                    <NavLink to='/' style={{ textDecoration: 'none',display:'flex',gap:'5px',alignItems:"center"}}>
                      <HomeRoundedIcon />
                      <ListItemText >Home</ListItemText></NavLink>
                  </ListItemButton>
                    <ListItemButton sx={{padding:'20px',"&:hover":{color:'#6b3bc4',backgroundColor:'#f5f5fd'}}}>
                    <NavLink to='/products' style={{ textDecoration: 'none',display:'flex',gap:'5px',alignItems:"center" }}>
                      <PollIcon />
                      <ListItemText >Products</ListItemText></NavLink>
                    </ListItemButton>
                    <ListItemButton sx={{padding:'20px',"&:hover":{color:'#6b3bc4',backgroundColor:'#f5f5fd'}}}>
                    <NavLink to='/cart' style={{ textDecoration: 'none',display:'flex',gap:'5px',alignItems:"center" }}>
                      <ShoppingCartIcon />
                      <ListItemText>Cart</ListItemText></NavLink>
                    </ListItemButton>
                    <ListItemButton sx={{padding:'20px',"&:hover":{color:'#6b3bc4',backgroundColor:'#f5f5fd'}}}>
                    <NavLink to='/about' style={{ textDecoration: 'none',display:'flex',gap:'5px',alignItems:"center" }}>
                      <InfoIcon />
                      <ListItemText>About</ListItemText></NavLink>
                    </ListItemButton>
                    <ListItemButton sx={{padding:'20px',"&:hover":{color:'#6b3bc4',backgroundColor:'#f5f5fd'}}}>
                    <NavLink to='/contact' style={{ textDecoration: 'none',display:'flex',gap:'5px',alignItems:"center" }}>
                      <ContactsIcon />
                      <ListItemText>Contact</ListItemText></NavLink>
                    </ListItemButton>
                    <ListItemButton sx={{padding:'20px',"&:hover":{color:'#6b3bc4',backgroundColor:'#f5f5fd'}}}>
                    <NavLink to='/' style={{ textDecoration: 'none',display:'flex',gap:'5px',alignItems:"center" }}>
                      <ExitToAppRoundedIcon />
                      <ListItemText>Login</ListItemText></NavLink>
                    </ListItemButton>
                  </List>
                </Drawer>
              </>
            ) : (
              <>
                <NavLink to='/'>
              <img src={Logo} alt="logo" height="50px" width="auto"/>
            </NavLink>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <NavLink to='/'><Tab sx={{color:"#6b3bc4","&:hover":{fontWeight:'bold'}}} label="Home" /></NavLink>
                  <NavLink to='/products'><Tab sx={{color:"#6b3bc4","&:hover":{fontWeight:'bold'}}} label="Products" /></NavLink>
                  <NavLink to='/cart'><Tab sx={{color:"#6b3bc4","&:hover":{fontWeight:'bold'}}} label="Cart" /></NavLink>
                  <NavLink to='/about'><Tab sx={{color:"#6b3bc4","&:hover":{fontWeight:'bold'}}} label="About" /></NavLink>
                  <NavLink to='/contact'><Tab sx={{color:"#6b3bc4","&:hover":{fontWeight:'bold'}}} label="Contact" /></NavLink>
                </Tabs>
                <Button
                  sx={{
                    marginLeft: "auto",
                    backgroundColor: "#6b3bc4",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#5931a3" },
                  }}
                  variant="contained"
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
