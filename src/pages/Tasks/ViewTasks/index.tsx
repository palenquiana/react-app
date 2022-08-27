import { useNavigate } from "react-router-dom";
import { Button, Card, Layout } from "../../../Components";
import "../../../assets/styles.css";
import { useTasks } from "../../../hooks/useTasks";

const ViewTasks = () => {
  const filter = () => {
    console.log("filtrado");
  };

  const navigate = useNavigate();

  const { remove, tasks, isLoading } = useTasks();

  if (isLoading) return <>Cargando...</>;

  return (
    <>
      <Layout page="tasks">
        <div className="container">
          <div className="d-flex flex-row-reverse">
            <Button
              text="Agregar tarea"
              onClick={() => navigate("/save", { replace: true })}
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
            {tasks.map(({ description, category, user, id, title }) => {
              return (
                <div className="col" key={id}>
                  <Card className="task" key={id} id={id}>
                    <ul className="list-group">
                      <li className="list-group-item">{title}</li>
                      <li className="list-group-item">{description}</li>
                      <li className="list-group-item">Categoria: {category}</li>
                      <li className="list-group-item">Usuario: {user}</li>
                    </ul>
                    <Button
                      text="Editar"
                      onClick={() => navigate(`/save/${id}`, { replace: true })}
                      type="button"
                      className="btn-dark m-2"
                    ></Button>

                    <Button
                      text="Eliminar"
                      onClick={() => {
                        remove(id);
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
