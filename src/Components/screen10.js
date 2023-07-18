import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc6.png";
import mylogo2 from "./pics/pc7.png";
import mylogo3 from "./pics/pc31.png";
import Button from '@mui/material/Button';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";

function Booking() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    borderRadius: 15,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();
  const goToEdit = () => {
    navigate("/screen11");
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
        <Grid
          item
          xs={11}
          style={{ backgroundColor: "#F4FAFB", marginTop: 60, marginLeft: 55 }}
        >
          <Item>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "18px",
                  marginLeft: 20,
                }}
              >
                Sanjay Malhotra
              </p>
              {/* <button variant="contained" style={{color:'yellow',backgroundColor:'#E1AD01',height:'20px',marginLeft:200,marginTop:10,borderRadius:8,borderColor:'#E1AD01'}}>Prospect</button> */}
              <p style={{ marginTop: 5, fontSize: "12px", marginLeft: 940 }}>
                Requested on 16/10/2022
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <EmailOutlinedIcon style={{ marginLeft: 20 }} />
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  marginLeft: 2,
                  marginTop: 1,
                }}
              >
                msanjay@gmail.com
              </p>
              <LocalPhoneOutlinedIcon style={{ marginLeft: 200 }} />
              {/* <button variant="contained" style={{color:'yellow',backgroundColor:'#E1AD01',height:'20px',marginLeft:200,marginTop:10,borderRadius:8,borderColor:'#E1AD01'}}>Prospect</button> */}
              <p
                style={{
                  marginTop: 0,
                  fontSize: "12px",
                  marginLeft: 2,
                  fontWeight: "bolder",
                }}
              >
                +91 896 326 2235
              </p>
              <LocationOnOutlinedIcon style={{ marginLeft: 200 }} />
              <p
                style={{
                  marginTop: 0,
                  fontSize: "12px",
                  marginLeft: 2,
                  fontWeight: "bolder",
                }}
              >
                Kolkata, India 632444
              </p>
            </div>
            <img
              style={{
                marginLeft: 20,
                width: "1220px",
                height: "2px",
                color: "#808080",
              }}
              src={mylogo3}
              alt="Something is wrong"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  marginLeft:20,
                  marginTop: 10,
                }}
              >
                EVENT LOCATION
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:370,
                  fontWeight: "bolder",
                }}
              >
                EVENT PLACE
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:370,
                  fontWeight: "bolder",
                }}
              >
                EVENT TYPE
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop:-15,
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  marginLeft:20,
                  marginTop: 10,
                }}
              >
                Banglore
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:424,
                  fontWeight: "bolder",
                }}
              >
                Ballroom 1
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:392,
                  fontWeight: "bolder",
                }}
              >
                Birthday Party
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop:5,
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  marginLeft:20,
                  marginTop: 10,
                }}
              >
                NO. OF GUESTS
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:380,
                  fontWeight: "bolder",
                }}
              >
                TIME
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:428,
                  fontWeight: "bolder",
                }}
              >
                DATE
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop:-15,
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  marginLeft:20,
                  marginTop: 10,
                }}
              >
                45-50
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:444,
                  fontWeight: "bolder",
                }}
              >
                10:00  -  15:00
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:382,
                  fontWeight: "bolder",
                }}
              >
                16/11/2022  -  16/11/2022
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  marginLeft:20,
                  marginTop: 10,
                }}
              >
                FOOD
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:440,
                  fontWeight: "bolder",
                }}
              >
                DRINK
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:420,
                  fontWeight: "bolder",
                }}
              >
                BUDGET
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop:-15,
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  marginLeft:20,
                  marginTop: 10,
                }}
              >
                Veg & Non-veg
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:388,
                  fontWeight: "bolder",
                }}
              >
               Alcohol & Soft-drink
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft:342,
                  fontWeight: "bolder",
                }}
              >
                2,00000 - 3,50000
              </p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:20}}>
                <p>Message(Optional)</p>
                <p style={{marginTop:-10}}>The Vienna Opera House is the only theater in the world, where the old concepts of luxury and gentility are still alive. Supreme mastery,moderate productions connservation, absence os shocks and scandals make visiting. </p>
            </div>
          </Item>
        </Grid>
        <Button onClick={goToEdit}style={{backgroundColor:'black',color:'#FFF26E',marginTop:40,marginLeft:660,marginBottom:20}}variant="contained">Edit</Button>
      </Grid>
    </>
  );
}

export default Booking;
