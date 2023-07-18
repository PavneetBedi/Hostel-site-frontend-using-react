import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import mylogo from "./pics/pc5.png";
import mylogo1 from "./pics/pc6.png";
import mylogo2 from "./pics/pc7.png";
import mylogo3 from "./pics/pc8.png";
import mylogo4 from "./pics/pc9.png";
import mylogo5 from "./pics/pc10.png";
import mylogo6 from "./pics/pc11.png";
import mylogo7 from "./pics/pc12.png";
import mylogo8 from "./pics/pc13.png";
import mylogo9 from "./pics/pc14.png";
import mylogo10 from "./pics/pc15.png";
import mylogo11 from "./pics/pc16.png";
import mylogo12 from "./pics/pc17.png";
import mylogo13 from "./pics/pc18.png";
import mylogo14 from "./pics/pc19.png";
import mylogo15 from "./pics/pc20.png";
import mylogo16 from "./pics/pc21.png";
import mylogo17 from "./pics/pc22.png";
import mylogo18 from "./pics/pc23.png";
import mylogo19 from "./pics/pc24.png";
import mylogo20 from "./pics/pc25.png";
import mylogo21 from "./pics/pc26.png";
import mylogo22 from "./pics/pc27.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

function createData(
  DueDate: string,
  Time: number,
  Type: string,
  Subject: string,
  Contact: String,
  Done: string
) {
  return { DueDate, Time, Type, Subject, Contact, Done };
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const rows = [
  createData(
    "09/06/2022",
    "11:00",
    "call",
    "xyz Some work",
    "Person Name",
    <Checkbox {...label} />
  ),
  createData(
    "09/06/2022",
    "11:00",
    "call",
    "xyz Some work",
    "Person Name",
    <Checkbox {...label} />
  ),
  createData(
    "09/06/2022",
    "11:00",
    "call",
    "xyz Some work",
    "Person Name",
    <Checkbox {...label} />
  ),
];

function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();
  const goToBooking = () => {
    navigate("/screen14");
  };
  const goToRequests = () => {
    navigate("/request");
  };

  const goToEvents = () => {
    navigate("/booking");
  };
  return (
    <>
      <Grid container>
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
        <Grid item xs={1.5} style={{ marginTop: -15 }}>
          <Item
            style={{
              height: 600,
              marginTop: 15,
              border: "1px solid black",
              borderRadius: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                displayDirection: "row",
                backgroundImage: `url(${mylogo7})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "35px",
                marginTop: 15,
              }}
            >
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  marginLeft: 20,
                  marginTop: 10,
                }}
                src={mylogo3}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#F5CB5E",
                  marginLeft: 8,
                  marginTop: 4,
                  fontSize: "15px",
                }}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Home
              </Button>
            </div>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: 18,
                  marginTop: 20,
                }}
                src={mylogo4}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#000000",
                  marginLeft: 8,
                  marginTop: 10,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
                //onClick={logi}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Meetings
              </Button>
            </div>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: 18,
                  marginTop: 20,
                }}
                src={mylogo5}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#000000",
                  marginLeft: 8,
                  marginTop: 10,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
                onClick={goToBooking}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Bookings
              </Button>
            </div>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: 18,
                  marginTop: 20,
                }}
                src={mylogo6}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#000000",
                  marginLeft: 8,
                  marginTop: 10,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
                //onClick={logi2}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Favourites
              </Button>
            </div>
          </Item>
        </Grid>

        <Box
          sx={{ display: "flex", flexDirection: "column" }}
          style={{ marginLeft: 5, marginTop: 0 }}
        >
          <img
            style={{ height: 3, width: 140, marginLeft: 15, marginTop: 25 }}
            src={mylogo10}
            alt="Something is wrong"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundImage: `url(${mylogo8})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginLeft: 15,
              width: 142,
              height: 44,
              color: "#FFFFFF",
            }}
          >
            <img
              style={{ marginLeft: 5, marginTop: 5, height: 27, width: 27 }}
              src={mylogo9}
              alt="Something is wrong"
            />

            <Button
              //onClick={goToLeaveReq}
              sx={{ textTransform: "none" }}
              style={{
                marginLeft: 5,
                fontSize: "15px",
                fontWeight: "bolder",
                color: "#000000",
              }}
            >
              Calender
            </Button>
            <div
              style={{
                backgroundImage: `url(${mylogo22})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "260px",
                width: "660px",
                border: "1px solid black",
                marginLeft: 80,
                marginTop: -15,
              }}
            >
              <p style={{ color: "red", padding: 5 }}>
                fndkjwefffffffffffffffffffffffffffffffffffffffjekwwwwwwwwwww
                fuiewnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnf
                ufeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeno
                \nffffffffffffffffffffffffffffffffsgdddddddddddddddddddddddddddddd
                wefffffffffffffffffffffffeeeeeee
                sdfdfffffffffffffffffffffffasddddddddddddddddddsssssssssssssssssssssssssssssssssssssssssssss
              </p>
            </div>
            <img
              style={{
                marginLeft: 10,
                marginTop: -15,
                height: 575,
                width: "1px",
                color: "black",
                fontWeight: "bolder",
              }}
              src={mylogo19}
              alt="Something is wrong"
            />

            <div
              style={{
                backgroundImage: `url(${mylogo21})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "270px",
                width: "300px",
                border: "1px solid black",
                marginLeft: 5,
                marginTop: -15,
              }}
            >
              <img
                style={{ marginLeft: 15, height: "250px", width: "280px" }}
                src={mylogo20}
                alt="Something is wrong"
              />
            </div>
          </div>
          <img
            style={{ height: 3, width: 140, marginLeft: 15, marginTop: 15 }}
            src={mylogo11}
            alt="Something is wrong"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundImage: `url(${mylogo8})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginLeft: 15,
              width: 142,
              height: 44,
              color: "#FFFFFF",
            }}
          >
            <img
              style={{ marginLeft: 5, marginTop: 5, height: 27, width: 27 }}
              src={mylogo12}
              alt="Something is wrong"
            />
            <Button
              onClick={goToEvents}
              sx={{ textTransform: "none" }}
              style={{
                marginLeft: 5,
                fontSize: "15px",
                fontWeight: "bolder",
                color: "#000000",
              }}
            >
              Events
            </Button>
          </div>
          <img
            style={{ height: 3, width: 140, marginLeft: 15, marginTop: 15 }}
            src={mylogo13}
            alt="Something is wrong"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundImage: `url(${mylogo8})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginLeft: 15,
              width: 142,
              height: 44,
              color: "#FFFFFF",
            }}
          >
            <img
              style={{ marginLeft: 5, marginTop: 5, height: 27, width: 27 }}
              src={mylogo14}
              alt="Something is wrong"
            />
            <Button
              onClick={goToRequests}
              sx={{ textTransform: "none" }}
              style={{
                marginLeft: 5,
                fontSize: "15px",
                fontWeight: "bolder",
                color: "#000000",
              }}
            >
              Requests
            </Button>
          </div>
          <img
            style={{ height: 3, width: 140, marginLeft: 15, marginTop: 15 }}
            src={mylogo15}
            alt="Something is wrong"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundImage: `url(${mylogo8})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginLeft: 15,
              width: 142,
              height: 44,
              color: "#FFFFFF",
            }}
          >
            <img
              style={{ marginLeft: 5, marginTop: 5, height: 27, width: 27 }}
              src={mylogo16}
              alt="Something is wrong"
            />
            <Button
              //onClick={goToLeaveReq}
              sx={{ textTransform: "none" }}
              style={{
                marginLeft: 5,
                fontSize: "15px",
                fontWeight: "bolder",
                color: "#000000",
              }}
            >
              Accounts
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundImage: `url(${mylogo17})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginLeft: 15,
              marginTop: 20,
              width: 842,
              height: 190,
              color: "#000000",
            }}
          >
            <p style={{ marginTop: 10, marginLeft: 20, fontWeight: "bolder" }}>
              My Tasks
            </p>
            <TableContainer
              style={{ marginLeft: 20, height: 130, marginTop: -5, width: 800 }}
              component={Paper}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    style={{
                      backgroundImage: `url(${mylogo18})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <TableCell style={{ fontWeight: "bolder" }}>
                      Due Date
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Time
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Type
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Subject
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Contact
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Done
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.DueDate}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.DueDate}
                      </TableCell>
                      <TableCell align="right">{row.Time}</TableCell>
                      <TableCell align="right">{row.Type}</TableCell>
                      <TableCell align="right">{row.Subject}</TableCell>
                      <TableCell align="right">{row.Contact}</TableCell>
                      <TableCell align="right">{row.Done}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundImage: `url(${mylogo17})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginLeft: 15,
              marginTop: 20,
              width: 842,
              height: 190,
              color: "#000000",
            }}
          >
            <p style={{ marginTop: 5, marginLeft: 20, fontWeight: "bolder" }}>
              Appointments
            </p>
            <TableContainer
              style={{ marginLeft: 20, height: 130, marginTop: -5, width: 800 }}
              component={Paper}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    style={{
                      backgroundImage: `url(${mylogo18})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <TableCell style={{ fontWeight: "bolder" }}>Date</TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Time
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Type
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Subject
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Contact
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">
                      Done
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.DueDate}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.DueDate}
                      </TableCell>
                      <TableCell align="right">{row.Time}</TableCell>
                      <TableCell align="right">{row.Type}</TableCell>
                      <TableCell align="right">{row.Subject}</TableCell>
                      <TableCell align="right">{row.Contact}</TableCell>
                      <TableCell align="right">{row.Done}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Grid>
    </>
  );
}

export default Dashboard;
