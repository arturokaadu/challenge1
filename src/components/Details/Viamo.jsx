import { data } from "../../data";
import { Link } from "react-router-dom";
import styles from "./details.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  TextareaHTMLAttributes,
} from "react";

export const Viamo = () => {
  const [textareaheight, setTextareaheight] = useState(1);

  function handleChange(event) {
    console.log(event.target.rows);
    const height = event.target.scrollHeight;
    const rowHeight = 15;
    const trows = Math.ceil(height / rowHeight) - 1;

    if (trows && textareaheight) {
      setTextareaheight(trows);
    }
  }
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
              <div className={styles.video}>
                <video
                  src={e.linkVideo}
                  width="1200"
                  height="768"
                  controls="controls"
                  autoPlay="true"
                />
              </div>
              <h3>Transcripción: </h3>

              <div className={styles.texta}>
                <textarea
                  className={styles.textb}
                  rows={textareaheight}
                  onChange={handleChange}
                >
                  {e.transcripcion}
                </textarea>
              </div>
              <h3>Tareas</h3>
              <div>
                <span className={styles.escenario}>
                  Escenario: {e.escenario}
                </span>
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
