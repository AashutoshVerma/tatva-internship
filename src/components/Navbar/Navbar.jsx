import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Home from "@mui/icons-material/Home";
import "./Navbar.css";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <a href="/">
          <Home />
        </a>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TatvaSoft Internship Project
        </Typography>

        <a href="/register">
          <Button variant="outlined" color="inherit">
            Register
          </Button>
        </a>
        <a href="/login">
          <Button variant="outlined" color="inherit">
            Login
          </Button>
        </a>
      </Toolbar>
    </AppBar>
  );
}
