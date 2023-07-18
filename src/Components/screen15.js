import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc6.png";
import mylogo2 from "./pics/pc7.png";
import mylogo3 from "./pics/pc28.png";
import mylogo4 from "./pics/pc29.png";
import mylogo5 from "./pics/pc30.png";
import mylogo6 from "./pics/pc31.png";
import Button from '@mui/material/Button';
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Checkbox from '@mui/material/Checkbox';
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
    navigate("/screen12");
  };
  const goToSubmit1 = () => {
    navigate("/dashboard");
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
        <Grid item xs={12} style={{ backgroundColor: "#F4FAFB", marginTop: 5 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{
                marginLeft: 415,
              }}
              src={mylogo4}
              alt="Something is wrong"
            />
            <img
              style={{
                marginLeft: -75,
                padding: 6,
              }}
              src={mylogo3}
              alt="Something is wrong"
            />
            <p
              style={{
                marginTop: 25,
                marginLeft: -45,
                color: "#FFC322",
                fontSize: "20px",
              }}
            >
              1
            </p>
            <img
              style={{
                height: "0.5px",
                marginLeft: 50,
                marginTop: 35,
                width: "400px",
              }}
              src={mylogo6}
              alt="Something is wrong"
            />
            <img
              style={{
                marginLeft: 10,
                marginTop: 15,
                width: "40px",
                height: "40px",
                //padding: 6,
              }}
              src={mylogo5}
              alt="Something is wrong"
            />
            <p
              style={{
                marginTop: 20,
                marginLeft: -25,
                color: "#FFC322",
                fontSize: "20px",
              }}
            >
              2
            </p>

            
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                marginLeft: 350,
                fontWeight: "bolder",
                fontSize: "18px",
                width: "200px",
                marginTop: 5,
                textAlignLast: "center",
              }}
            >
              PERSONAL & CONTACT DETAILS
            </p>
            <p
              style={{
                marginLeft: 360,
                fontWeight: "bolder",
                fontSize: "18px",
                width: "50px",
                marginTop: 5,
                textAlignLast: "left",
              }}
            >
             EVENT DETAILS
            </p>
          </div>
        </Grid>
        <Grid item xs={11}>
          <Item
            style={{
              marginTop:-10,
              marginLeft: "100px",
              borderRadius: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 140,
                padding: 15,
                fontSize: "15px",
                color: "#000000",
              }}
            >
              <Grid item xs={5.5}>
                <b>Event Location</b>
                <br></br>
                <TextField
                  id="outlined-basic"
                  placeholder="eg Banglore"
                  variant="outlined"
                  type="text"
                  style={{ marginTop: 7 }}
                  InputProps={{
                    sx: { height: "40px", width: "350px", borderRadius: 3 },
                  }}
                />
              </Grid>
              <Grid item xs={5.5}>
                <b>Event Place</b>
                <br></br>
                <TextField
                  id="outlined-basic"
                  placeholder="eg celebration hall"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: 7 }}
                  InputProps={{
                    sx: { height: "40px", width: "350px", borderRadius: 3 },
                  }}
                />
              </Grid>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 140,
                padding: 15,
                fontSize: "15px",
                color: "#000000",
              }}
            >
              <Grid item xs={5.5}>
                <b>Event Type</b>
                <br></br>
                <TextField
                  id="outlined-basic"
                  placeholder="eg. Birthday party"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: 7 }}
                  InputProps={{
                    sx: { height: "40px", width: "350px", borderRadius: 3 },
                  }}
                />
              </Grid>
              <Grid item xs={2.5}>
                <b>No. of Guests</b>
                <br></br>
                <TextField
                  id="outlined-basic"
                  type="number"
                  placeholder="eg. min 45"
                  variant="outlined"
                  style={{ marginTop: 7 }}
                  InputProps={{
                    sx: { height: "40px", width: "150px", borderRadius: 3 },
                  }}
                />
                </Grid>
                <Grid item xs={2.5}>
                <b>Pin Code</b>
                <br></br>
                <TextField
                  id="outlined-basic"
                  type="number"
                  placeholder="eg. max 50"
                  variant="outlined"
                  style={{ marginTop: 7 }}
                  InputProps={{
                    sx: { height: "40px", width: "150px", borderRadius: 3 },
                  }}
                />
              </Grid>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 140,
                padding: 15,
                fontSize: "15px",
                color: "#000000",
              }}
            >
              <Grid item xs={2.5}>
                <b>Time From</b>
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker defaultValue={dayjs("2022-04-17T10:00")} />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={2.5} style={{ marginLeft:5 }}>
                <b>Time Till</b>
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker defaultValue={dayjs("2022-04-17T10:00")} />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={2.5} style={{ marginLeft:40}}>
                <b>Country</b>
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker defaultValue={dayjs("2022-06-13")} />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={2.5} style={{ marginLeft:47 }}>
                <b>Country</b>
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker defaultValue={dayjs("2022-06-13")} />
                </LocalizationProvider>
              </Grid>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={{fontWeight:'bolder',color:'#000000',marginLeft:155,fontSize:'15px'}}>Food</p>
            <p style={{fontWeight:'bolder',color:'#000000',marginLeft:415,fontSize:'15px'}}>Drinks</p>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
              <Checkbox style={{marginLeft:145,marginTop:-15}}/>
              <p style={{fontWeight:'bolder',color:'#000000',marginTop:-2}}>Veg</p>
              <Checkbox style={{marginTop:-15,marginLeft:20}}/>
              <p style={{fontWeight:'bolder',color:'#000000',marginTop:-2}}>Non-veg</p>
              <Checkbox style={{marginLeft:265,marginTop:-15}}/>
              <p style={{fontWeight:'bolder',color:'#000000',marginTop:-2}}>Alcohol</p>
              <Checkbox style={{marginTop:-15,marginLeft:20}}/>
              <p style={{fontWeight:'bolder',color:'#000000',marginTop:-2}}>Non Alcohol</p>
              <Checkbox style={{marginTop:-15,marginLeft:20}}/>
              <p style={{fontWeight:'bolder',color:'#000000',marginTop:-2}}>Soft Drinks</p>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={{fontWeight:'bolder',color:'#000000',marginLeft:155,fontSize:'15px'}}>Message (optional)</p>
            <p style={{fontWeight:'bolder',color:'#000000',marginLeft:315,fontSize:'15px'}}>Budget (INR)</p>
            <p style={{fontWeight:'bolder',color:'#000000',marginLeft:115,fontSize:'15px'}}>Date Till</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 140,
                marginTop:-25,
                padding: 15,
                fontSize: "15px",
                color: "#000000",
              }}
            >
              <Grid item xs={5.5}>
                <TextField
                  id="outlined-basic"
                  placeholder="eg Banglore"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: 7 }}
                  InputProps={{
                    sx: { height: "100px", width: "400px", borderRadius: 3 },
                  }}
                />
              </Grid>
              <Grid item xs={2.5}>
                <TextField
                  id="outlined-basic"
                  type="number"
                  placeholder="eg. 20,000 (min)"
                  variant="outlined"
                  style={{ marginTop: 7,marginLeft:10 }}
                  InputProps={{
                    sx: { height: "40px", width: "150px", borderRadius: 3 },
                  }}
                />
                </Grid>
                <Grid item xs={2.5} style={{marginLeft:20}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker  defaultValue={dayjs("2022-06-13")} />
                </LocalizationProvider>
              </Grid>
              </div>
            
            
            
            
          </Item>
          <div style={{display:'flex',flexDirection:'row'}}>
               <p style={{fontWeight:'bolder',marginLeft:120,marginTop:10,cursor:'pointer'}} onClick={goToSubmit1}>Close</p>
            </div>
            <Button onClick={goToSubmit}style={{backgroundColor:'black',color:'#FFF26E',marginLeft:1140,marginTop:-65,width:100}} sx={{textTransform:'none'}}variant="contained">Submit</Button>

        </Grid>
      </Grid>
    </>
  );
}

export default Booking;
