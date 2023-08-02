import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Home from "@mui/icons-material/Home";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/">
          <Home sx={{ margin: "1rem" }} color="inherit" />
        </NavLink>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TatvaSoft Internship Project
        </Typography>

        <NavLink to="/register">
          <Button variant="contained" color="inherit">
            Register
          </Button>
        </NavLink>
        <NavLink to="/login">
          <Button variant="contained" color="inherit" sx={{ m: "1rem" }}>
            Login
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
