import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import background from "./pics/pc4.png";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc1.png";
// import { useFormik } from "formik";
// import { passUpSchema } from "./schemas/pass";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

// const initialValues = {
//   password: "",
//   confirm_password: "",
// };
const Login = () => {
  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues,
  //     validationSchema: passUpSchema,
  //     onSubmit: (values, action) => {
  //       if (values) {
  //         navigate("/successfulllogin");
  //       }
  //       console.log(
  //         "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
  //         values
  //       );
  //       action.resetForm();
  //     },
  //   });
  const navigate = useNavigate();
  const goToNext = () => {
         navigate("/successfulllogin");
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
              borderRadius: 20,
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              backgroundPosition: "center",
              marginTop: -90,
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 12,
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
                Reset Password
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
                    fullWidth
                    name="password"
                    type="password"
                    autoComplete="off"
                    id="password"
                    // value={values.password}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    placeholder="New Password"
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
                      style={{ marginTop: 30, marginLeft: -255, color: "red" }}
                      className="form-error"
                    >
                      {errors.password}
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
                    fullWidth
                    name="confirm_password"
                    type="password"
                    autoComplete="off"
                    id="confirm_password"
                    // value={values.confirm_password}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    placeholder="Re-enter Password"
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
                  {/* {errors.confirm_password && touched.confirm_password ? (
                    <p
                      style={{ marginTop: 30, marginLeft: -238, color: "red" }}
                      className="form-error"
                    >
                      {errors.confirm_password}
                    </p>
                  ) : null} */}
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="text"
                  onClick={goToNext}
                  // onSubmit={handleSubmit}
                  sx={{ mt: 3, mb: 2 }}
                  style={{
                    marginTop: 120,
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    color: "white",
                    backgroundPosition: "center",
                  }}
                >
                  Confirm
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
