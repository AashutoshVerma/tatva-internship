import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Home from "@mui/icons-material/Home";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../../components/Searchbar/SearchBar";

export default function NavBar({ role, isloggedIn, setLoggedIn }) {
  console.log("from navbar :" + role);
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/">
          <Home sx={{ margin: "1rem", color: "white" }} />
        </NavLink>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TatvaSoft Internship Project
        </Typography>
        {/* <SearchBar variant="outlined" /> */}
        {isloggedIn && (role == 2 || role == 1 || role == 3) ? (
          <>
            <NavLink to="/">
              <Button variant="contained" color="inherit" sx={{ ml: "1rem " }}>
                Home
              </Button>
            </NavLink>
            {role == 1 ? (
              <>
                <NavLink to="/manage">
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ ml: "1rem" }}
                  >
                    Users
                  </Button>
                </NavLink>
                <NavLink to="/adminmanagecategory">
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ ml: "1rem " }}
                  >
                    Manage Category
                  </Button>
                </NavLink>
                <NavLink to="/adminmanagebooks">
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ ml: "1rem " }}
                  >
                    Manage Books
                  </Button>
                </NavLink>
              </>
            ) : null}
            {role == 2 ? (
              <>
                <NavLink to="/managebooks">
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ ml: "1rem " }}
                  >
                    Manage Books
                  </Button>
                </NavLink>
              </>
            ) : null}
            <NavLink to="/">
              <Button
                variant="contained"
                color="inherit"
                onClick={() => {
                  setLoggedIn(false);
                }}
                sx={{ ml: "1rem" }}
              >
                Logout
              </Button>
            </NavLink>{" "}
          </>
        ) : (
          <>
            <NavLink to="/register">
              <Button variant="contained" color="inherit">
                Register
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button variant="contained" color="inherit" sx={{ ml: "1rem" }}>
                Login
              </Button>
            </NavLink>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
