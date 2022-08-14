import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { tasksApi } from "../../../Api"
import { Button, Card } from "../../../Components"
import { Task } from "../type-task"
import '../../../Assets/styles.css'



const ViewTasks = () => {

    const filter = () => {
        console.log('filtrado');
        
    }

    const navigate = useNavigate()

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        tasksApi.getAll().then(response => setTasks(response))
    }, [])


    return(
        <div className="container">
            <div className="d-flex flex-row-reverse">
                <Button text="Agregar tarea" onClick={()=>navigate('/tasks/add', {replace:true})} type="button" className="btn-dark m-2" />
                <Button text="Filtrar" onClick={filter} type="button" className="btn-dark m-2" />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                { tasks.map(({description, category, user, idDB, title}) => {
                    return (                       
                        <div className="col" key={idDB}>
                            <Card className="task" key={idDB} id={idDB}>
                                <ul className="list-group">
                                    <li className="list-group-item">{title}</li>
                                    <li className="list-group-item">{description}</li>
                                    <li className="list-group-item">Categoria: {category}</li>
                                    <li className="list-group-item">Usuario: {user}</li>
                                </ul>  
                                <Button text="Editar" onClick={() => navigate(`/tasks/edit/${idDB}`, {replace:true})} type="button" className="btn-dark m-2"></Button>
                            </Card>
                    </div> 
                    )
                })}
            </div>
      </div>  
        
    )
}



export { ViewTasks }