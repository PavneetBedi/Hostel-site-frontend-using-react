import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc6.png";
import mylogo2 from "./pics/pc7.png";
import mylogo7 from "./pics/pc37.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Booking() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();
  const goToSubmit = () => {
    navigate("/screen14");
  };
  const goToSubmit1 = () => {
    navigate("/booking");
  };
  return (
    <>
      <Grid container style={{ backgroundColor: "#F4FAFB" }}>
        <Grid item xs={12}>
          <Item
            style={{
              backgroundColor: "#000000",
              height: "54px",
              borderRadius: 0,
            }}
          >
            <img
              style={{
                marginLeft: -15,
                width: "85px",
                height: "55px",
              }}
              src={mylogo}
              alt="Something is wrong"
            />
            <img
              style={{
                marginLeft: 1200,
                marginBottom: "10px",
                width: "30px",
                height: "30px",
              }}
              src={mylogo1}
              alt="Something is wrong"
            />
            <img
              style={{
                marginLeft: 15,
                marginBottom: "10px",
                width: "30px",
                height: "30px",
                borderRadius: 30,
              }}
              src={mylogo2}
              alt="Something is wrong"
            />
          </Item>
        </Grid>
        <Grid item xs={11}>
          <Item
            style={{
              marginLeft: "100px",
              borderRadius: 20,
              marginBottom:133,
              marginTop:50
            }}
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#000000",
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                Add Event
              </p>
              <img
                style={{
                  marginLeft: -15,
                  width: "305px",
                  height: "255px",
                }}
                src={mylogo7}
                alt="Something is wrong"
              />
              <div
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "#FFF26E",
                    marginTop: 35,
                    marginBottom: 20,
                    marginLeft: 20,
                    width: "200px",
                    fontWeight:'bolder'
                  }}
                  onClick={goToSubmit}
                  sx={{ textTransform: "none" }}
                  variant="contained"
                >
                  Add New Booking
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#C9C9C9",
                    marginTop: 35,
                    marginBottom: 20,
                    marginLeft: 30,
                    fontWeight:'bolder',
                    width: "200px",
                    height:'40px'
                  }}
                  onClick={goToSubmit1}
                  sx={{ textTransform: "none" }}
                  variant="text"
                >
                  Add Event on Existing Account
                </Button>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Booking;
