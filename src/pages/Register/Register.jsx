import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import axios from "axios";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Username : ${username} \nEmail : ${email} \nPassword : ${password}`);
    axios
      .post("http://localhost:8080/api/users/registerUser", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data.data == "User Already Exists") {
          toast.error(response.data.data);
        } else if (response.data.data == "User Created") {
          toast.success(response.data.data);
        }
      });
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    validatePasswordsMatch(password, event.target.value);
  };

  const validatePasswordsMatch = (password, confirmPassword) => {
    setPasswordsMatch(password === confirmPassword);
    console.log("p :" + password + "cp : " + confirmPassword);
  };

  useEffect(() => {
    const validatePasswordsMatch = (password, confirmPassword) => {
      setPasswordsMatch(password === confirmPassword);
    };
  }, [password, confirmPassword]);

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
              padding: "1rem",
              /* From https://css.glass */
              background: "rgba(25, 18, 210, 0.13)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(8.1px)",
              border: "1px solid rgba(183, 188, 236, 0.43)",
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <AppRegistration />
            </Avatar>
            <Typography sx={{ fontSize: "1.5rem" }}>Register</Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                autoFocus
                sx={{ width: "20rem", margin: ".4rem auto" }} // Add this line to set the desired width
              />
              <TextField
                margin="normal"
                required
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{ width: "20rem", margin: ".4rem auto" }} // Add this line to set the desired width
              />
              <TextField
                margin="normal"
                required
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePasswordsMatch(e.target.value, confirmPassword);
                }}
                sx={{ width: "20rem", margin: ".4rem auto" }} // Add this line to set the desired width
              />
              <TextField
                margin="normal"
                required
                id="confirmPassword"
                label=" Confirm Password "
                name="confirm password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validatePasswordsMatch(e.target.value, password);
                }}
                error={!passwordsMatch}
                helperText={!passwordsMatch && "Passwords do not match"}
                sx={{ width: "20rem", margin: ".4rem auto" }} // Add this line to set the desired width
              />
              <Custombutton
                type="submit"
                variant="contained"
                sx={{ mt: 2, bgcolor: "green" }}
                // onClick={handleSubmit}
              >
                Register
              </Custombutton>
            </Box>
          </Box>
        </ThemeProvider>
        <ToastContainer limit={1} position="top-right" autoClose={2000} />
      </Container>
    </div>
  );
};

export default Login;
