import { data } from "../../data";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import styles from "./home.module.css";


export const Home = () => {
  return (
    <div className={styles.cardContainer}>
      <h2>Clientes: </h2>
      <div>
        {data.map((e, key) => {
          return (
            <div key={key}>
              <Link to={"/" + e.cliente}>
                <Card cliente={e.cliente} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
