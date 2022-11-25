import { data } from "../../data";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

export const Home = () => {
  return (
    <div>
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
