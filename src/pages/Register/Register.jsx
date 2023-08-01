import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import {
  Avatar,
  Box,
  Button,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { green, purple, red } from "@mui/material/colors";
import {
  AppRegistration,
  Height,
  LockClockSharp,
  LockOutlined,
  PhoneLockedRounded,
} from "@mui/icons-material";

const Custombutton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.status.success,
  },
}));

const theme = createTheme({
  status: {
    danger: red[500],
    success: purple[800],
  },
});

const defaultTheme = createTheme();

const Login = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="xs" margin="auto">
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              marginTop: 8,
              width: "30rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // border: "2px solid black",
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <AppRegistration />
            </Avatar>
            <Typography sx={{ fontSize: "1.5rem" }}>Register</Typography>
            <Box
              sx={{
                mt: 1,
                maxWidth: "xs",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                margin="normal"
                required
                id="Username"
                label="Username"
                name="Username"
                autoComplete="Username"
                autoFocus
                sx={{ width: "20rem", margin: ".2rem auto" }} // Add this line to set the desired width
              />
              <TextField
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{ width: "20rem", margin: ".2rem auto" }} // Add this line to set the desired width
              />
              <TextField
                margin="normal"
                required
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                sx={{ width: "20rem", margin: ".2rem auto" }} // Add this line to set the desired width
              />
              <TextField
                margin="normal"
                required
                id="password"
                label=" Confirm Password "
                name="password"
                sx={{ width: "20rem", margin: ".2rem auto" }} // Add this line to set the desired width
              />
              <Custombutton
                variant="contained"
                sx={{ mt: 2, bgcolor: "green" }}
              >
                Register
              </Custombutton>
            </Box>
          </Box>
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default Login;
