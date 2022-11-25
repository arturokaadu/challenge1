import {data} from "../../data"


export const Viamo = () => {
    var firstO = data.slice(0,1)

    var preguntas = firstO.map( e => {return e.preguntas})

/*     var requiredElements = preguntas[0].map((e) => {return {tiempo: e.tiempo, tarea: e.texto}})
    console.log(requiredElements); */

return (
    <>
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
    </div>
    </>
)



}