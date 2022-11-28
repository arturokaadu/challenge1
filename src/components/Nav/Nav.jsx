import { Link } from "react-router-dom";
import styles from "./nav.module.css";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navlinks}>
        <Link to="/" style={{ textDecoration: "none"}}>
          <div>Home</div>
        </Link>
        <Link to="/Nebula">Client Nebula</Link>
        <Link to="/Viamo">Client Viamo</Link>
      </div>
    </div>
  );
};
