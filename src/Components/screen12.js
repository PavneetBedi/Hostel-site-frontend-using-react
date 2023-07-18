import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc6.png";
import mylogo2 from "./pics/pc7.png";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import mylogo17 from "./pics/Path 45.png";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "200px",
  bgcolor: "#FFFFFF",
  borderRadius: 5,
  cursor:'pointer',
  p: 4,
};

function Trainerprofilesuccessfully() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  const navigate = useNavigate();
  const goToSubmit = () => {
    navigate("/dashboard");
  };

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
        <Box sx={style} onClick={goToSubmit}>
          <div
            style={{
              display: "flex",
              width: "42px",
              height:"42px",
              displayDirection: "row",
              alignContent: "center",
              marginLeft: 180,
              marginTop:-20,
              backgroundColor: "black",
              borderRadius:50
            }}
          >
            <img
              style={{ width:"26px",height:"22px",marginTop:12,marginLeft:7 }}
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
            Request Sent
          </p>
          <p
            style={{
              color: "#000000",
              fontWeight: "bolder",
              marginLeft: 150,
              fontSize: "15px",
              marginTop: 5,
            }}
          >
            Ticket ID : 987
          </p>
          <p style={{ color: "#000000", marginTop: 30, width:"400px" }}>
            We have received your request for the Event “Birthday Party” our
            sales team will contact you soon for further Details.
          </p>
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
