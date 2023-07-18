import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import background from "./pics/pc4.png";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc1.png";
// import { useFormik } from "formik";
// import { empUpSchema } from "./schemas/empid";

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
  const goToNext = () => {
    navigate("/checkyouremail");
  };
  
  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues,
  //     validationSchema: empUpSchema,
  //     onSubmit: (values, action) => {
  //       if(values){
  //         navigate('/checkyouremail')
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
              sx={{
                marginTop: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 5,
              }}
            >
              <p
                style={{
                  padding: 4,
                  fontWeight: "bold",
                  fontSize: 24,
                  alignContent: "center",
                  textAlign: "center",
                  textAlignLast: "center",
                }}
              >
                Please Enter your employee Id
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
              {/* {errors.email && touched.email ? (
                <p
                  style={{ marginTop: 5, marginLeft:-140, color: "red" }}
                  className="form-error"
                >
                  {errors.email}
                </p>
              ) : null} */}
              <Button
                type="submit"
                fullWidth
                variant="text"
                onClick={goToNext}
                // onSubmit={handleSubmit}
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
                style={{
                  backgroundImage: `url(${background})`,
                  marginTop: 80,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  color: "white",
                  backgroundPosition: "center",
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
