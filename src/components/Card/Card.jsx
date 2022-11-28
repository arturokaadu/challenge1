import {data} from "../../data";
import styles from "./card.module.css";


export const Card = ({cliente, url}) => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <h3 className={styles.col}>{cliente}</h3>
                <h3>{url}</h3>
            </div>


        </div>

    )
}