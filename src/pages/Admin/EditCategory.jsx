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
import FormControl from "@mui/material/FormControl";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { green, purple, red } from "@mui/material/colors";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import {
  AppRegistration,
  Category,
  Height,
  LockClockSharp,
  LockOutlined,
  PhoneLockedRounded,
} from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const EditCategory = ({ categoryId }) => {
  const navigateToComponent = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  //   const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("    for category", categoryName, categoryId);
    axios
      .put("https://book-e-sell-node-api.vercel.app/api/category", {
        id: categoryId,
        name: categoryName,
      })
      .then((response) => {
        if (response.data.key == "SUCCESS") {
          toast.success("Category Updated !!");
          setTimeout(() => {
            navigateToComponent("/");
          }, 3000);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error);
        console.log(err);
      });
  };
  return (
    <div>
      {/* <NavBar /> */}
      <Container maxWidth="xs" sx={{ minHeight: "69vh" }}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              marginTop: 8,
              marginBottom: 8,
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
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <AddCircleOutlinedIcon />
            </Avatar>
            <Typography sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              Update Category
            </Typography>
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
                id="id"
                label="ID"
                name="id"
                autoComplete="name"
                value={categoryId}
                placeholder={`${Category}`}
                autoFocus
                sx={{ width: "20rem", margin: ".4rem .2rem" }} // Add this line to set the desired width
              />
              <TextField
                margin="normal"
                required
                id="name"
                label="Category Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
                sx={{ width: "20rem", margin: ".4rem .2rem" }} // Add this line to set the desired width
              />

              <Custombutton
                type="submit"
                variant="contained"
                sx={{ mt: 2, bgcolor: "green" }}
                // onClick={handleSubmit}
              >
                Add
              </Custombutton>
            </Box>
          </Box>
        </ThemeProvider>
        <ToastContainer limit={1} position="top-right" autoClose={2000} />
      </Container>
    </div>
  );
};

export default EditCategory;
