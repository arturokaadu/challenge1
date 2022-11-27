import { data } from "../../data";
import { Link } from "react-router-dom";
export const Viamo = () => {
  var firstO = data.slice(0, 1);

  var preguntas = firstO.map((e) => {
    return e.preguntas;
  });


  return (
    <>
   {/*     <div>
            <button>
                <Link to="/">Home</Link>
            </button>

            <button>
                <Link to="/Nebula">To other client Nebula</Link>
            </button>
        </div> */}
      <div>
        {firstO.map((e, key) => {
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
