import React from "react";
import Modal from "@mui/material/Modal";
import mylogo17 from "./pics/Path 45.png";
import Box from "@mui/material/Box";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc6.png";
import mylogo2 from "./pics/pc7.png";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "250px",
  bgcolor: "#FFFFFF",
  borderRadius: 5,
  p: 4,
};

function Trainerprofilesuccessfully() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  //   const navigate = useNavigate();
  //   const viewmore = () => {
  //     navigate("/trainerprofile2");
  //   };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    borderRadius: 15,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  return (
    <>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              width: "42px",
              height: "42px",
              displayDirection: "row",
              alignContent: "center",
              marginLeft: 240,
              marginTop: -20,
              backgroundColor: "black",
              borderRadius: 50,
            }}
          >
            <img
              style={{
                width: "26px",
                height: "22px",
                marginTop: 12,
                marginLeft: 7,
              }}
              src={mylogo17}
              alt="Something is wrong"
            />
          </div>
          <p
            style={{
              color: "#000000",
              fontWeight: "bolder",
              marginLeft: 140,
              fontSize: "20px",
              marginTop: 5,
            }}
          >
            Event created Successfuly
          </p>
          <p
            style={{
              color: "#000000",
              fontWeight: "bolder",
              marginLeft: 210,
              fontSize: "15px",
              marginTop: 5,
            }}
          >
            Ticket ID : 987
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              style={{ color: "#000000" }}
            />
            <p style={{ fontSize: "12px", marginLeft: -5 }}>
              Proposal catering only
            </p>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
              style={{ marginLeft: 20 }}
            />
            <p style={{ fontSize: "12px", marginLeft: -5 }}>
              Residential Conference
            </p>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              style={{ color: "#000000", marginLeft: 20 }}
            />
            <p style={{ fontSize: "12px", marginLeft: -5 }}>Guest Only</p>
          </div>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              alignContent: "center",
              alignItem: "center",
              textAlign: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "black",
                color: "#FFF26E",
                marginTop: 15,
                marginLeft: 160,
                width: "200px",
                fontWeight: "bolder",
              }}
              sx={{ textTransform: "none" }}
              variant="contained"
            >
              Generate Proposal
            </Button>
            <p
              style={{
                color: "#000000",
                marginTop: 20,
                marginLeft: 60,
                width: "400px",
              }}
            >
              Generate Proposal and share it with catering, Residential
              Conference and guest..
            </p>
          </div>
        </Box>
      </Modal>
      <div
        style={{ backgroundColor: "white", height: "100vh", cursor: "pointer" }}
        onClick={handleOpen}
      ></div>
    </>
  );
}

export default Trainerprofilesuccessfully;
