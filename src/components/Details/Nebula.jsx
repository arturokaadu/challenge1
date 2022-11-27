import { data } from "../../data";
import { Link } from "react-router-dom";
var secondO = data.slice(-1);
var preguntas = secondO.map((e) => {
  return e.preguntas;
});

export const Nebula = () => {
  return (
    <>
      {/*   <div>
            <button>
                <Link to="/">Home</Link>
            </button>

            <button>
                <Link to="/Viamo">To other client Viamo</Link>
            </button>
        </div> */}
      <div>
        {secondO.map((e, key) => {
          return (
            <div key={key}>
              <h3>Cliente: {e.cliente} </h3>
              <video
                src={e.linkVideo}
                width="600"
                height="300"
                controls="controls"
                autoPlay="true"
              />
              <div>
                <textarea>{e.transcripcion}</textarea>
              </div>
              <h2>Tareas</h2>
              <span>Escenario: {e.escenario}</span>
            </div>
          );
        })}
        <div>
          {preguntas[0].map((e, index) => {
            return (
              <div>
                <span>
                  {" "}
                  Tarea{index}: {e.texto}{" "}
                </span>

                <span>duracion de la tarea: {e.tiempo}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
