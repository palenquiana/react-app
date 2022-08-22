import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { usersApi } from "../../../Api";
import { Button } from "../../../Components";
import { InitialUser } from "../../../Type";

const SaveUser = () => {
  const { id } = useParams();
  const initialData = { name: "" };

  const [user, setUser] = useState<InitialUser>(initialData);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    usersApi.save(user, id);
  };

  return (
    <>
      <div className="card card-form primary-form container p-1">
        <h3 className="text-center">
          {id ? <>Editar usuario</> : <>Agregar usuario</>}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column align-items-center ">
            <div>
              <label htmlFor="name" className="fw-bold">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                value={user.name}
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="email" className="fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label htmlFor="password" className="fw-bold">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                value={user.password}
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <Button
            className=""
            text={id ? "Editar" : "Agregar"}
            type="submit"
          ></Button>
        </form>
      </div>
    </>
  );
};

export { SaveUser };
