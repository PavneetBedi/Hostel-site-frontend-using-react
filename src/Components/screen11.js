import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc6.png";
import mylogo2 from "./pics/pc7.png";
import mylogo3 from "./pics/pc31.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Checkbox from "@mui/material/Checkbox";
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
  const goToSave = () => {
    navigate("/eventcreatedsuccessfully");
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
          style={{ backgroundColor: "#F4FAFB", marginTop: 10, marginLeft: 55 }}
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
              <p style={{ marginTop: 5, fontSize: "12px", marginLeft: 915 }}>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: -30,
              }}
            >
              <p style={{ fontSize: "12px", marginLeft: 1155 }}>RES ID 278</p>
              <img
                style={{
                  marginLeft: 20,
                  width: "1200px",
                  height: "2px",
                  color: "#808080",
                }}
                src={mylogo3}
                alt="Something is wrong"
              />
            </div>
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
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                EVENT LOCATION
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft: 270,
                  fontWeight: "bolder",
                }}
              >
                BOOKING FOR
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft: 270,
                  fontWeight: "bolder",
                }}
              >
                NO. OF GUESTS
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop: -15,
              }}
            >
              <Box
                sx={{ minWidth: 280 }}
                style={{ marginLeft: 20, marginTop: 8 }}
              >
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    style={{ height: "40px" }}
                  >
                    <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box
                sx={{ minWidth: 280 }}
                style={{ marginLeft: 98, marginTop: 8 }}
              >
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ height: "40px" }}
                  >
                    <MenuItem value={"Ballroom"}>Ballroom</MenuItem>
                    <MenuItem value={"Ballroom1"}>Ballroom1</MenuItem>
                    <MenuItem value={"Ballroom2"}>Ballroom2</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="min 45"
                style={{ marginLeft: 75, marginTop: 8 }}
                inputProps={{
                  style: {
                    height: "6px",
                  },
                }}
              />

              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="max 55"
                style={{ marginLeft: 35, marginTop: 8 }}
                inputProps={{
                  style: {
                    height: "6px",
                  },
                }}
              />
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
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                EVENT TYPE
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft: 302,
                  fontWeight: "bolder",
                }}
              >
                DATE
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft: 140,
                  fontWeight: "bolder",
                }}
              >
                DATE TILL
              </p>
              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft: 125,
                  fontWeight: "bolder",
                }}
              >
                TIME
              </p>
              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft: 225,
                  fontWeight: "bolder",
                }}
              >
                TIME TILL
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop: -15,
              }}
            >
              <div>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="number"
                  placeholder="min 45"
                  style={{ marginLeft: 20, marginTop: 8 }}
                  inputProps={{
                    style: {
                      height: "6px",
                      width: 250,
                    },
                  }}
                />
              </div>

              <div style={{ marginLeft: 100, marginTop: 8, width: "165px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker defaultValue={dayjs("2022-06-13")} />
                </LocalizationProvider>
              </div>
              <div style={{ marginLeft: 10, marginTop: 8, width: "165px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker defaultValue={dayjs("2022-06-13")} />
                </LocalizationProvider>
              </div>
              <div style={{ marginLeft: 20 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker defaultValue={dayjs("2022-04-17T10:00")} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <p style={{ marginLeft: 10, fontSize: "20px" }}>-</p>

              <div style={{ marginLeft: 10 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker defaultValue={dayjs("2022-04-17T10:00")} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
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
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                FOOD
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft: 345,
                  fontWeight: "bolder",
                }}
              >
                DRINKS
              </p>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "12px",
                  marginLeft: 312,
                  fontWeight: "bolder",
                }}
              >
                BUDGET(INR)
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                marginTop: -15,
              }}
            >
              <Checkbox
                defaultChecked
                style={{ marginLeft: 10, marginTop: 0 }}
              />

              <p
                style={{
                  fontSize: "15px",
                  marginLeft: 2,
                  marginTop: 10,
                }}
              >
                Veg
              </p>
              <Checkbox
                defaultChecked
                style={{ marginLeft: 10, marginTop: 0 }}
              />
              <p
                style={{
                  fontSize: "15px",
                  marginLeft: 2,
                  marginTop: 10,
                }}
              >
                Non Veg
              </p>
              <Checkbox
                defaultChecked
                style={{ marginLeft: 197, marginTop: 0 }}
              />
              <p
                style={{
                  fontSize: "15px",
                  marginLeft: 2,
                  marginTop: 10,
                }}
              >
                Alcohol
              </p>
              <Checkbox style={{ marginLeft: 10, marginTop: 0 }} />
              <p
                style={{
                  fontSize: "15px",
                  marginLeft: 2,
                  marginTop: 10,
                }}
              >
                Non-Alcohol
              </p>
              <Checkbox
                defaultChecked
                style={{ marginLeft: 10, marginTop: 0 }}
              />
              <p
                style={{
                  fontSize: "15px",
                  marginLeft: 2,
                  marginTop: 10,
                }}
              >
                Soft-drink
              </p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="2,00000"
                style={{ marginLeft: 20, marginTop: 8 }}
                inputProps={{
                  style: {
                    height: "6px",
                    width: 195,
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="3,50000"
                style={{ marginLeft: 25, marginTop: 8 }}
                inputProps={{
                  style: {
                    height: "6px",
                    width: 195,
                  },
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 20,
              }}
            >
              <p>Message(Optional)</p>
              <p style={{ marginTop:10,padding:5,marginLeft:150,width:670,borderRadius:10,border:'1px solid grey' }}>
                The Vienna Opera House is the only theater in the world, where
                the old concepts of luxury and gentility are still alive.
                Supreme mastery,moderate productions connservation, absence os
                shocks and scandals make visiting.{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 20,
                fontWeight:'bolder',
                marginTop:-20,
              }}
            >
                <p>Food</p>
                <p style={{marginLeft:710}}>Final Amount</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 20,
                marginTop:-10,
                fontWeight:'bolder'
              }}
            >
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="Veg Dishes"
                style={{width:280,}}
                inputProps={{
                  style: {
                    height: "6px",  
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                placeholder="Non-Veg Dishes"
                style={{width:280,marginLeft:100}}
                inputProps={{
                  style: {
                    height: "6px",  
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="3,10000"
                style={{width:280,marginLeft:85}}
                inputProps={{
                  style: {
                    height: "6px",  
                  },
                }}
              />
              </div>
              <p style={{marginLeft:20,fontWeight:'bolder'}}>Drinks</p>
              <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 20,
                marginTop:-10,
                fontWeight:'bolder'
              }}
            >
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="Alcohol"
                style={{width:280,}}
                inputProps={{
                  style: {
                    height: "6px",  
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="Soft Drinks"
                style={{width:280,marginLeft:100,marginBottom:10}}
                inputProps={{
                  style: {
                    height: "6px",  
                  },
                }}
              />
              </div>
          </Item>
          <Button style={{backgroundColor:'black',color:'#FFF26E',marginTop:40,marginLeft:600,marginBottom:20}} onClick={goToSave} variant="contained">Save</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Booking;
