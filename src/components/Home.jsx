// import styles and images
import "../styles/Home.css";
import homeimage from "../assets/homeimage.png";
// handle click function
const handleClick = () => {
  const element = document.getElementById("about");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};
// home page code
export default function Home() {
  return (
    <div id="home" className="home">
      <div className="home__title">
        <h1>Your health companion to detect and control syncope</h1>
        <p>
          an M5 Stack program that detects faints, give instructions, and alerts
          contancts
        </p>
        <div classname="home__buttons">
          <a
            className="home__buttons__contained"
            href="https://github.com/Mohammad-Amjed/SYNCOPX-M5stack/archive/refs/heads/main.zip"
          >
            DOWNLOAD
          </a>
          <button className="home__buttons__outlined" onClick={handleClick}>
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="home__image">
        <img src={homeimage} alt="alt" />
      </div>
    </div>
  );
}
