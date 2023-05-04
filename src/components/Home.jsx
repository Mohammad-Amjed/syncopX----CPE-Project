import "../styles/Home.css";
import homeimage from "../assets/homeimage.png";
import ScrollWheelHandler from "react-scroll-wheel-handler";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
const handleClick = () => {
  const element = document.getElementById("about");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const useStyles = makeStyles((theme) => ({
  buttonStack: {
    display: "flex",
    justifyContent: "center",
  },
  containedButton: {
    backgroundColor: "#FF5E5E", // Change background color
    color: "white", // Change text color
    padding: "16px 32px", // Change padding
    borderRadius: "8px", // Add border radius
    fontSize: "18px", // Change font size

    "&:hover": {
      borderColor: "#000",
      backgroundColor: "transparent",
      color: "black", // Change background color on hover
      boxShadow: "none",
    },
  },
  outlinedButton: {
    borderColor: "black", // Change border color
    color: "black", // Change text color
    padding: "10px 32px", // Change padding
    borderRadius: "8px", // Add border radius
    fontSize: "18px", // Change font size
    "&:hover": {
      backgroundColor: "#FF5E5E",
      color: "#fff", // Change background color on hover
      borderColor: "#FF5E5E",
    },
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className="home">
      <div className="home__title">
        <h1>Your health companion to detect and control syncope</h1>
        <p>
          an M5 Stack program that detects faints, give instructions, and alerts
          contancts
        </p>
        <Stack spacing={2} direction="row">
          <Button
            className={classes.containedButton}
            variant="contained"
            href="https://github.com/Mohammad-Amjed/testCodespace/archive/refs/heads/main.zip"
          >
            DOWNLOAD
          </Button>
          <Button
            className={classes.outlinedButton}
            variant="outlined"
            onClick={handleClick}
          >
            LEARN MORE
          </Button>
        </Stack>
        <div classname="home__buttons">
          <button className="home__buttons__contained"> DOWNLOAD</button>
          <button className="home__buttons__outlined">LEARN MORE</button>
        </div>
      </div>
      <div className="home__image">
        <img src={homeimage} alt="alt" />
      </div>
    </div>
  );
}
