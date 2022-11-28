import { data } from "../../data";
import { Link } from "react-router-dom";
import styles from "./details.module.css";



export const Viamo = () => {
  var firstO = data.slice(0, 1);

  var preguntas = firstO.map((e) => {
    return e.preguntas;
  });


  return (
    <>

      <div className={styles.cardContainer}>
        {firstO.map((e, key) => {
          return (
            <div key={key}>
              <h3>Cliente: {e.cliente} </h3>
              <div  className={styles.video}>
              <video
                src={e.linkVideo}
                width="1200"
                height="768"
                controls="controls"
                autoPlay="true"
              />
              </div>
              <div className={styles.texta}>
                <textarea>{e.transcripcion}</textarea>
              </div>
              <h3>Tareas</h3>
              <div>

              <span  className={styles.escenario}>Escenario: {e.escenario}</span>
              </div>
            </div>
          );
        })}
        <div>
          {preguntas[0].map((e, index) => {
            return (
              <div className={styles.tareas}>
             <div className={styles.lines}></div>
                <span>
                  Tarea {index}: {e.texto}
                </span>
                <div className={styles.texto}>
                  <span>Duracion de la tarea: {e.tiempo}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
