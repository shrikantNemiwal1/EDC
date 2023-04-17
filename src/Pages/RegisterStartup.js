import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Link, withRouter } from "react-router-dom";
import { Person, AccountCircle } from "@mui/icons-material";
import axios from "axios";

const RegisterStartup = () => {
  const [emailID, setEmailID] = useState("");
  const [mobileNo, setMobileNo] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [code, setCode] = useState("");

  console.log(emailID, mobileNo);

  return !submit ? (
    <Grid container component="main" sx={{ height: "100vh", display: "block" }}>
      <Box
        sx={{
          mx: 8,
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          verticalAlign: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <Person />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email ID"
            type="email"
            name="email id"
            value={emailID}
            onChange={(e) => setEmailID(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Mobile No."
            label="Mobile No."
            type="text"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="StartUp/Company Name"
            type="text"
            name="StartUp/Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            autoComplete="company-name"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => setSubmit(true)}
          >
            SIGN UP
          </Button>
          <Grid container>
            <Grid item xs>
              <Link style={{ textDecoration: "none", color: "primary" }} to="/">
                FORGOT PASSWORD
              </Link>
            </Grid>
            <Grid item>
              <Link style={{ textDecoration: "none", color: "primary" }} to="/">
                ALREADY HAVE AN ACCOUNT? LOGIN
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  ) : (
    <Grid container component="main" sx={{ height: "100vh", display: "block" }}>
      <Box
        sx={{
          mx: 8,
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          verticalAlign: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <Person />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Typography component="h2" variant="h7">
            Please enter the security code sent on your Email
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="code"
            label="Enter Code"
            type="text"
            name="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => console.log("code submit")}
          >
            SUBMIT
          </Button>
          <Grid container>
            <Grid item xs>
              <Link style={{ textDecoration: "none", color: "primary" }} to="/">
                FORGOT PASSWORD
              </Link>
            </Grid>
            <Grid item>
              <Link style={{ textDecoration: "none", color: "primary" }} to="/">
                ALREADY HAVE AN ACCOUNT? LOGIN
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default RegisterStartup;
