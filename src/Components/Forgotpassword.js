import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import background from "./pics/pc4.png";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc1.png";
// import { useFormik } from "formik";
// import { forgotUpSchema } from "./schemas/forgot";

// const initialValues = {
//   email: "",
// };

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Login = () => {
  const navigate = useNavigate();

    const emp = () => {
      navigate("/employeeid");
    };
  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues,
  //     validationSchema: forgotUpSchema,
  //     onSubmit: (values, action) => {
  //       if (values) {
  //         navigate("/employeeid");
  //       }
  //       console.log(
  //         "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
  //         values
  //       );
  //       action.resetForm();
  //     },
  //   });
  

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
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              backgroundPosition: "center",
              borderRadius: 20,
              marginTop: -90,
            }}
          >
            <CssBaseline />
            <Box
            component="form"
            // onSubmit={handleSubmit}
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
                Forgot Password?
              </Typography>
              <p
                style={{
                  padding: 4,
                  fontWeight: "bold",
                  fontSize: 22,
                  alignContent: "center",
                  textAlignLast: "center",
                  color: "#B3B2B7",
                }}
              >
                Please Enter your email or Registered Mobile Number to get
                started
              </p>
              <TextField
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                fullWidth
                // value={values.email}
                // onChange={handleChange}
                // onBlur={handleBlur}
                placeholder="Email / Mobile Number"
                style={{ color: "#FFFFFF" }}
                variant="standard"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {/* {errors.email && touched.email ? (
                <p
                  style={{ marginTop: 5, marginLeft: -145, color: "red" }}
                  className="form-error"
                >
                  {errors.email}
                </p>
              ) : null} */}

              <Button
                type="submit"
                fullWidth
                component='form'
                variant="text"
                onClick={emp}
                // onSubmit={handleSubmit}
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  color: "white",
                  backgroundPosition: "center",
                  marginTop: 80,
                }}
              >
                Next
              </Button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "lighter",
                  fontSize: 12,
                  color: "#B3B2B7",
                }}
              >
                Check our privacy notice
              </div>
            </Box>
          </Container>
        </ThemeProvider>
      </Grid>
    </>
  );
};
export default Login;
