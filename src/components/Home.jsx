import "../styles/Home.css";
import homeimage from "../assets/homeimage.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
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
          an M5 Stack program that detects faint and sends an alarm to the
          contacts
        </p>
        <Stack spacing={2} direction="row">
          <Button className={classes.containedButton} variant="contained">
            Download
          </Button>
          <Button className={classes.outlinedButton} variant="outlined">
            Learn more
          </Button>
        </Stack>
      </div>
      <div className="home__image">
        <img src={homeimage} alt="alt" />
      </div>
    </div>
  );
}
