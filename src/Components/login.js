import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import background from "./pics/pc4.png";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc1.png";
// import { useFormik } from "formik";
// import { signUpSchema } from "./schemas/index";

// const initialValues = {
//   userName: "",
//   password: "",
// };
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Login = () => {
  const navigate = useNavigate();
  //   const goToSignin = () => {
  //     navigate("/login1");
  //   };
  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues,
  //     validationSchema: signUpSchema,
  //     onSubmit: (values, action) => {
  //       if(values){
  //         navigate('/')
  //       }
  //       console.log(
  //         "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
  //         values
  //       );
  //       action.resetForm();
  //     },
  //   });
  // console.log(
  //   "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
  //   errors
  // );
  const goToforgot = () => {
    navigate("/Forgotpassword");
  };

  const goToLogin = () => {
    navigate("/dashboard");
  };

  const Signin = () => {
    navigate("/Signin");
  };

  return (
    <>
      <Grid
        style={{
          backgroundImage: `url(${mylogo1})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "white",
        }}
      >
        <img
          style={{ width: 150, height: 100, marginTop: 0, marginLeft: 0 }}
          src={mylogo}
          alt="Something is wrong"
        />

        <ThemeProvider theme={theme}>
          <Container
            component="main"
            maxWidth="xs"
            style={{
              backgroundImage: `url(${background})`,
              borderRadius: 20,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              backgroundPosition: "center",
              marginTop: -80,
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                style={{ fontWeight: "bold" }}
              >
                Login
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Box
                  sx={{
                    marginTop: 4,
                    padding: 0,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TextField
                    type="name"
                    autoComplete="off"
                    name="userName"
                    id="userName"
                    fullWidth
                    placeholder="User Name"
                    // value={values.userName}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    variant="standard"
                    autoFocus
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person3OutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {/* {errors.userName && touched.userName ? (
                    <p
                      style={{ marginTop: 30, marginLeft: -285, color: "red" }}
                      className="form-error"
                    >
                      {errors.userName}
                    </p>
                  ) : null} */}
                </Box>
                <Box
                  sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "row",
                    padding: 0,
                  }}
                >
                  <TextField
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    fullWidth
                    placeholder="Password"
                    // value={values.password}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    variant="standard"
                    autoFocus
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {/* {errors.password && touched.password ? (
                    <p
                      style={{ marginTop: 30, marginLeft: -285, color: "red" }}
                      className="form-error"
                    >
                      {errors.password}
                    </p>
                  ) : null} */}
                </Box>
                <Box
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "row",
                    padding: 0,
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox name="checkedit" color="primary" />}
                    label="Remember me"
                    alignItems="left"
                    style={{ fontWeight: "bold" }}
                  />
                  <p
                    onClick={goToforgot}
                    style={{ fontWeight: "lighter", cursor: "pointer" }}
                  >
                    Forgot Password?
                  </p>
                </Box>

                <Button
                  onClick={goToLogin}
                  //onSubmit={handleSubmit}
                  type="submit"
                  fullWidth
                  variant="text"
                  sx={{ mt: 3, mb: 2 }}
                  style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    color: "white",
                    backgroundPosition: "center",
                  }}
                >
                  LOG IN
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="text"
                  onClick={Signin}
                  sx={{ mt: 0, mb: 2 }}
                  style={{
                    color: "white",
                    backgroundPosition: "center",
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Grid>
    </>
  );
};
export default Login;
