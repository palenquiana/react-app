import { FC } from "react";
import { Task } from "../type-task";


const AddTask:FC<Task> =()=>{
    return(
    <>
    <h3>Add task</h3>
    <form>
        <div>
            <label htmlFor="title">Título</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="date"> Fecha</label>
            <input type="date" />
        </div>
        <div>
            <label htmlFor="">Estado</label>
            <div>
                <label htmlFor="pendiente">Pendiente</label>
                <input type="radio" name="pendiente" id="" />
            </div>

            <div>
                <label htmlFor="enProceso">En proceso</label>
                <input type="radio" name="enProceso" id="" />
            </div>
            <div>
                <label htmlFor="realizado">Realizado</label>
                <input type="radio" name="realizado" id="" />
            </div>

       

        </div>

       
        
         


    </form>
    
    
    </>

    )

}

export { AddTask }