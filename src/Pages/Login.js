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
} from "@mui/material";
import { Link, withRouter } from "react-router-dom";
import { Person } from "@mui/icons-material";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, password);

  return (
    <Grid container component="main" sx={{ height: "100vh", display: "block" }}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          verticalAlign: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <Person />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mt: 4 }}>
          LOG IN
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => console.log("login submit")}
          >
            Sign In
          </Button>

          <Grid item>
            <Link
              style={{ textDecoration: "none", color: "primary" }}
              to="/register-startup"
            >
              DON'T HAVE AN ACCOUNT? REGISTER
            </Link>
          </Grid>
        </Box>
      </Box>
    </Grid>
    // </Grid>
  );
};

export default Login;
