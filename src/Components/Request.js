import React from "react";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc6.png";
import mylogo2 from "./pics/pc7.png";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import mylogo7 from "./pics/pc32.png";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import mylogo15 from "./pics/pc35.png";
import mylogo18 from "./pics/pc36.png";
import mylogo10 from "./pics/pc34.png";
import { useNavigate } from "react-router-dom";

function Trainerprofilesuccessfully() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    borderRadius: 15,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  function createData(
    EVENTPLACE: string,
    LOCATION: string,
    NAME: string,
    EVENT: string,
    CallUpdate: string,
    DATE: string,
    TIME: string,
    STATUS: string
  ) {
    return {
      EVENTPLACE,
      LOCATION,
      NAME,
      EVENT,
      CallUpdate,
      DATE,
      TIME,
      STATUS,
    };
  }

  const rows = [
    createData(
      <p>
        <img src={mylogo15} alt="BigCo Inc. logo" /> &nbsp; Ballroom 1
      </p>,
      "Banglore",
      "Sanjay Malhotra",
      "Birthday party",
      "Confirm",
      "28/09/2022",
      "10:00 - 15:00",
      <p
        style={{
          backgroundImage: `url(${mylogo18})`,
          backgroundRepeat: "no-repeat",
          borderRadius: 2,
          height: 23,
          width: 97,
          marginLeft: 20,
          backgroundSize: "cover",
          color: "#358208",
        }}
      >
        Confirm
      </p>
    ),
    createData(
      
      <p>
      <img src={mylogo15} alt="BigCo Inc. logo" /> &nbsp; Ballroom 1
    </p>,
      "Banglore",
      "Sanjay Malhotra",
      "Birthday party",
      "Need Time",
      "28/09/2022",
      "10:00 - 15:00",
      <p
        style={{
          borderRadius: 10,
          height: 23,
          width: 97,
          marginLeft: 20,
          color: "#252299",
          backgroundColor: "#D3D2FF",
        }}
      >
        Tentative
      </p>
    ),
    createData(
      <p>
        <img src={mylogo15} alt="BigCo Inc. logo" /> &nbsp; Ballroom 1
      </p>,
      "Banglore",
      "Sanjay Malhotra",
      "Birthday party",
      "On Hold",
      "28/09/2022",
      "10:00 - 15:00",
      <p
        style={{
          borderRadius: 10,
          height: 23,
          width: 97,
          marginLeft: 20,
          backgroundColor: "#FFFCA1",
          color: "#D8D823",
        }}
      >
        Confirm
      </p>
    ),
    createData(
      <p>
        <img src={mylogo15} alt="BigCo Inc. logo" /> &nbsp; Ballroom 1
      </p>,
      "Banglore",
      "Sanjay Malhotra",
      "Birthday party",
      "Need Time",
      "28/09/2022",
      "10:00 - 15:00",
      <p
        style={{
          backgroundImage: `url(${mylogo18})`,
          backgroundRepeat: "no-repeat",
          borderRadius: 2,
          height: 23,
          width: 97,
          marginLeft: 20,
          color: "#358208",
          backgroundSize: "cover",
        }}
      >
        Confirm
      </p>
    ),
    createData(
      <p>
      <img src={mylogo15} alt="BigCo Inc. logo" /> &nbsp; Ballroom 1
    </p>,
      "Banglore",
      "Sanjay Malhotra",
      "Birthday party",
      "Need Time",
      "28/09/2022",
      "10:00 - 15:00",
      <p
        style={{
          borderRadius: 10,
          height: 23,
          width: 97,
          marginLeft: 20,
          color: "#252299",
          backgroundColor: "#D3D2FF",
        }}
      >
        Tentative
      </p>
    ),
    createData(
      <p>
        <img src={mylogo15} alt="BigCo Inc. logo" /> &nbsp; Ballroom 1
      </p>,
      "Banglore",
      "Sanjay Malhotra",
      "Birthday party",
      "Confirm",
      "28/09/2022",
      "10:00 - 15:00",
      <p
        style={{
          backgroundImage: `url(${mylogo18})`,
          backgroundRepeat: "no-repeat",
          borderRadius: 2,
          height: 23,
          width: 97,
          color: "#358208",
          backgroundSize: "cover",
          marginLeft: 20,
        }}
      >
        Confirm
      </p>
    ),
  ];
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
      <Grid item xs={12} style={{cursor:'pointer'}} onClick={goToSubmit}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bolder",
              marginLeft: 20,
              marginTop: 17,
            }}
          >
            Request
          </p>
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search Existing Account"
            style={{
              marginLeft: 800,
              height: "35px",
              width: "280px",
              marginTop: 17,
              borderRadius: 10,
              border: "1px solid grey",
              padding: 10,
            }}
          />
          <img
            style={{
              marginLeft: -30,
              marginTop: 22,
              width: "20px",
              height: "25px",
            }}
            src={mylogo7}
            alt="Something is wrong"
          />
          <Select
            style={{
              marginLeft: 50,
              marginTop: 17,
              width: "120px",
              height: "30px",
              borderRadius: 20,
              Color: "#F4FAFB",
            }}
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Default</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            style={{ borderRadius: 10 }}
          >
            <TableHead
              style={{
                backgroundImage: `url(${mylogo10})`,
                backgroundRepeat: "no-repeat",
                borderRadius: 20,
                backgroundSize: "cover",
              }}
            >
              <TableRow>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bolder", fontSize: "12px" }}
                >
                  EVENT PLACE
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bolder", fontSize: "12px" }}
                >
                  LOCATION
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bolder", fontSize: "12px" }}
                >
                  NAME
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bolder", fontSize: "12px" }}
                >
                  EVENT
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bolder", fontSize: "12px" }}
                >
                  Call Update
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bolder", fontSize: "12px" }}
                >
                  DATE
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bolder", fontSize: "12px" }}
                >
                  TIME
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bolder", fontSize: "12px" }}
                >
                  STATUS
                </TableCell>
                {/* <TableCell
                      align="center"
                      onClick={viewmore}
                      style={{
                        verticalAlign: "top",
                        fontWeight: "bolder",
                        fontSize: "18px",
                        cursor:'pointer'
                      }}
                    >
                      <Icon
                        color="primary"
                        baseClassName="fas"
                        className="fa-plus-circle"
                        style={{ marginTop: 3,cursor:'pointer' }}
                        onClick={viewmore}
                      />
                      Add Profile
                    </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.EVENTPLACE}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" style={{ color: "bold" }}>
                    {row.EVENTPLACE}
                  </TableCell>
                  <TableCell align="center">{row.LOCATION}</TableCell>
                  <TableCell align="center">{row.NAME}</TableCell>
                  <TableCell align="center">{row.EVENT}</TableCell>
                  <TableCell align="center">{row.CallUpdate}</TableCell>
                  <TableCell align="center">{row.DATE}</TableCell>
                  <TableCell align="center">{row.TIME}</TableCell>
                  <TableCell align="center">{row.STATUS}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default Trainerprofilesuccessfully;
