import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mapToArray } from "../../../Api";
import { Button, Card } from "../../../Components";
import { Task } from "../../../Type";
import "../../../Assets/styles.css";

const ViewTasks = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {tasks.map(({ description, category, user, idDB, title }) => {
          return (
            <div className="col">
              {/* <Card className="task" key={idDB} id={idDB}>
                <ul className="list-group">
                  <li className="list-group-item">{title}</li>
                  <li className="list-group-item">{description}</li>
                  <li className="list-group-item">Categoria: {category}</li>
                  <li className="list-group-item">Usuario: {user}</li>
                </ul>
              </Card> */}
            </div>
          );
        })}
      </div>
      <Button
        text="Agregar tareas"
        onClick={() => navigate("/tasks/add", { replace: true })}
        type="button"
        className="btn-dark m-4"
      />
    </div>
  );
};

export { ViewTasks };
