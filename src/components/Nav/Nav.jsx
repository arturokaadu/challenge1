import { Link } from "react-router-dom";
import styles from "./nav.module.css";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navlinks}>
        <Link to="/challenge1" style={{ textDecoration: "none"}}>
          <div>Home</div>
        </Link>
        <Link to="/challenge1/nebula">Client Nebula</Link>
        <Link to="/challenge1/viamo">Client Viamo</Link>
      </div>
    </div>
  );
};
