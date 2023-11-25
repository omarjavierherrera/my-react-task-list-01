import React from "react";


function Tarea ({ texto }){
    return(
        <div className='tarea-contenedor'>
            <div className="tarea-texto">
                { texto }
            </div>
            <div className="tarea-iconos">
            Eliminar
            </div>
        </div>
    )
}

export default Tarea;