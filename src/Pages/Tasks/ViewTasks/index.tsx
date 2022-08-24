import { useNavigate } from "react-router-dom";
import { Button, Card, Layout } from "../../../Components";
import "../../../Assets/styles.css";
import { useSetTasks } from "../../../Hooks/setTasks";

const ViewTasks = () => {
  const filter = () => {
    console.log("filtrado");
  };

  const navigate = useNavigate();

  const { removeAndUpdate, data } = useSetTasks();

  // if (!tasks) return <>Cargando...</>;

  return (
    <>
      <Layout page="tasks">
        <div className="container">
          <div className="d-flex flex-row-reverse">
            <Button
              text="Agregar tarea"
              onClick={() => navigate("/tasks/add", { replace: true })}
              type="button"
              className="btn-dark m-2"
            />
            <Button
              text="Filtrar"
              onClick={filter}
              type="button"
              className="btn-dark m-2"
            />
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.map((task) => {
              return (
                <div className="col" key={task.id}>
                  <Card className="task" key={task.id} id={task.id}>
                    <ul className="list-group">
                      <li className="list-group-item">{task.title}</li>
                      <li className="list-group-item">{task.description}</li>
                      <li className="list-group-item">
                        Categoria: {task.category}
                      </li>
                      <li className="list-group-item">Usuario: {task.user}</li>
                    </ul>
                    <Button
                      text="Editar"
                      onClick={() =>
                        navigate(`/tasks/edit/${task.id}`, { replace: true })
                      }
                      type="button"
                      className="btn-dark m-2"
                    ></Button>

                    <Button
                      text="Eliminar"
                      onClick={() => {
                        removeAndUpdate(task);
                      }}
                      type="button"
                      className="btn-dark m-2"
                    ></Button>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export { ViewTasks };
