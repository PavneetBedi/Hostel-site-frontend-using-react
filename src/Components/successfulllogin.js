import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import background from "./pics/pc4.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc1.png";
import mylogo2 from "./pics/pc2.png";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Login = () => {
  const navigate = useNavigate();
  const goToforgot = () => {
    navigate("/dashboard");
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
              <img
                style={{
                  width: 300,
                  height: 200,
                  marginTop: 30,
                  marginLeft: 30,
                  cursor: "pointer",
                }}
                src={mylogo2}
                alt="Something is wrong"
                onClick={goToforgot}
              />
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
                You have successfully Logged in
              </p>
            </Box>
          </Container>
        </ThemeProvider>
      </Grid>
    </>
  );
};
export default Login;
