import Link from "@mui/material/Link";
import "../styles/Nav.css";
export default function Nav() {
  return (
    <div className="nav">
      {" "}
      <div className="navbar__left">
        <div className="navbar__left__brand">
          <Link to="/">SyncopX</Link>
        </div>
        <div className="navbar__left__links">
          <Link href="#">About</Link>
          <Link href="#">Download</Link>
          <Link href="#">Instructions</Link>
        </div>
      </div>
      <div className="navbar__right">
        <Link href="#">Login</Link>
      </div>
    </div>
  );
}
