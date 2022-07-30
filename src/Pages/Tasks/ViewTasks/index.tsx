import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../../Components"


const ViewTasks:FC =() => {

    const navigate = useNavigate()

    return( 

        <>
            <Button text="Agregar tareas" onClick={()=>navigate('/tasks/add', {replace:true})} type="button" className="btn-dark" />
            
        </>
       
    )

}
export { ViewTasks }