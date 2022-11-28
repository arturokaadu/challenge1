import { data } from "../../data";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import styles from "./home.module.css";


export const Home = () => {
  return (
    <div className={styles.cardContainer}>
    
      <div>
        {data.map((e, key) => {
          return (
            <div className={styles.col} key={key}>
              <Link style={{ textDecoration: "none" }} to={"/" + e.cliente}>
                <Card  cliente={e.cliente} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
