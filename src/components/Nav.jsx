import Link from "@mui/material/Link";
import "../styles/Nav.css";

const handleClick1 = () => {
  const element = document.getElementById("about");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleClick2 = () => {
  const element = document.getElementById("manual");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Nav() {
  return (
    <div className="nav">
      {" "}
      <div className="navbar__left">
        <div className="navbar__left__brand">
          <Link>SyncopX</Link>
        </div>
        <div className="navbar__left__links">
          <Link onClick={handleClick1}>About</Link>
          <Link href="https://github.com/Mohammad-Amjed/SYNCOPX-M5stack/archive/refs/heads/main.zip">
            Download
          </Link>
          <Link onClick={handleClick2}>Instructions</Link>
        </div>
      </div>
      <div className="navbar__right">
        <Link href="#">Login</Link>
      </div>
    </div>
  );
}
