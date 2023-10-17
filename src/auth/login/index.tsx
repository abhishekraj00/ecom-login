import { useState } from "react";
import "./login.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import Loader from "../../components/Loader";
import Link from "@mui/material/Link";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // getting response from the server

  const loginUserResponse = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: username,
          password: userPassword,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <Box
      className="login-main-container"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          onChange={(e) => setUserPassword(e.target.value)}
          label="Password"
          value={userPassword}
        />
      </FormControl>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={loginUserResponse} color="primary">
          Login
        </Button>
      </Stack>
      <div>
        Not a member ?{" "}
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Sign Up
        </Link>
      </div>
    </Box>
  );
};

export default Login;
