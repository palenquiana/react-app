import { FC, useEffect, useState } from "react";
import { Button } from "../../../Components";
import { categoriesApi, mapToArray, tasksApi, usersApi } from "../../../Api";
import { Select } from "../Select";
import { Category, InitialTask, Task, User } from "../../../Type";
import { useParams } from "react-router-dom";

const SaveTask = () => {
  const { id } = useParams();
  const initialData = { title: "" };

  const [task, setTask] = useState<InitialTask>(initialData);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    tasksApi.save(task, id);
  };

  const [getCat, setCat] = useState<Category[]>([]);
  const [getUser, setUser] = useState<User[]>([]);
  useEffect(() => {
    categoriesApi.getAll().then((response) => setCat(response));
    usersApi.getAll().then((response) => setUser(response));
  }, []);

  return (
    <div className="card card-form primary-form container p-2">
      <h3 className="text-center">
        {id ? <>Editar tarea</> : <>Agregar tarea</>}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-around">
          <div>
            <div>
              <label htmlFor="title" className="fw-bold">
                Título
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setTask((prevState) => ({
                    ...prevState,
                    title: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="date" className="fw-bold">
                Fecha
              </label>
              <input
                type="date"
                className="form-control"
                onChange={(e) =>
                  setTask((prevState) => ({
                    ...prevState,
                    date: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="description" className="fw-bold">
                Descripción
              </label>
              <textarea
                name="description"
                id=""
                placeholder="Agregá una descripción"
                className="form-control"
                onChange={(e) =>
                  setTask((prevState) => ({
                    ...prevState,
                    description: e.target.value,
                  }))
                }
              ></textarea>
            </div>
          </div>
          <div>
            <div className="d-flex flex-column">
              <label htmlFor="catOp" className="fw-bold">
                Categorias
              </label>
              <select name="catOp" id="" className="form-select">
                {getCat.map(({ name, id }) => {
                  return (
                    <option value={name} key={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label htmlFor="state" className="fw-bold">
                Estado
              </label>
              <div>
                <input
                  type="radio"
                  name="state"
                  id="pending"
                  className="me-1"
                  value="pending"
                  onChange={() => {
                    setTask((prevState) => ({
                      ...prevState,
                      state: "pending",
                    }));
                  }}
                />
                <label htmlFor="pending">Pendiente</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="state"
                  id="doing"
                  className="me-1"
                  value="doing"
                  onChange={() => {
                    setTask((prevState) => ({
                      ...prevState,
                      state: "doing",
                    }));
                  }}
                />
                <label htmlFor="doing">En proceso</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="state"
                  id="done"
                  className="me-1"
                  value="done"
                  onChange={() => {
                    setTask((prevState) => ({
                      ...prevState,
                      state: "done",
                    }));
                  }}
                />
                <label htmlFor="done">Realizado</label>
              </div>
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="userOp" className="fw-bold">
                Usuarios
              </label>
              <select name="userOp" id="" className="form-select">
                {getUser.map(({ name, id }) => {
                  return (
                    <option value={name} key={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <Button
          className="ms-3 "
          text={id ? "Editar" : "Agregar"}
          type="submit"
        ></Button>
      </form>
    </div>
  );
};
export { SaveTask };
