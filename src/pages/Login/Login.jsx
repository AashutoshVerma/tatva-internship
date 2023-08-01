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
import { green, red, yellow } from "@mui/material/colors";
import {
  Height,
  LockClockSharp,
  LockOutlined,
  PhoneLockedRounded,
} from "@mui/icons-material";

const CustomButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.status.success,
  },
}));

const theme = createTheme({
  status: {
    danger: red[500],
    success: green[800],
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
              <LockOutlined />
            </Avatar>
            <Typography sx={{ fontSize: "1.5rem" }}>Sign In</Typography>
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ width: "20rem", margin: "auto" }} // Add this line to set the desired width
              />
              <TextField
                margin="normal"
                required
                id="password"
                label="Password "
                name="password"
                sx={{ width: "20rem" }} // Add this line to set the desired width
              />
              <CustomButton variant="contained" sx={{ mt: 2 }}>
                Submit
              </CustomButton>
            </Box>
          </Box>
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default Login;
