import { FC } from "react";



const AddTask:FC =()=>{
    return(
    <>
        <div className="card card-form primary-form container p-1">
            <h3 className="text-center">Agregar tareas</h3>
            <form>
                <div className="d-flex flex-column align-items-center ">
                    <div>
                        <label htmlFor="title" className="fw-bold">Título</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div>
                        <label htmlFor="date" className="fw-bold"> Fecha</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="description" className="fw-bold">Descripción</label>
                        <textarea name="" id="" placeholder="Agregá una descripción" className="form-control"></textarea>
                    </div>
                    <div> 
                        

                    </div>
                    <div>
                        <label htmlFor="" className="fw-bold">Estado</label>
                        <div>
                            <input type="radio" name="pendiente" id="" className="me-1"/>
                            <label htmlFor="pendiente">Pendiente</label>
                        </div>

                        <div>
                            <input type="radio" name="enProceso" id="" className="me-1"/>
                            <label htmlFor="enProceso">En proceso</label>                       
                        </div>
                        <div>
                            <input type="radio" name="realizado" id="" className="me-1"/>
                            <label htmlFor="realizado">Realizado</label>   
                        </div>

                    </div>

                </div>
               

            </form>

        </div>
     
    
    
    
    </>

    )

}

export { AddTask }