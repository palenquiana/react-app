import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../../../api";
import { Button, Layout } from "../../../components";
import { User } from "../../../types";

const ViewUser = () => {
  const navigate = useNavigate();

  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    usersApi.getAll().then((response) => setUser(response));
  }, []);
  return (
    <>
      <Layout page="users">
        <div className="container">
          <div className="d-flex flex-row-reverse">
            <Button
              text="Agregar usuario"
              onClick={() => navigate("/users/save", { replace: true })}
              type="button"
              className="btn-dark m-2"
            />
          </div>

          <h3>Usuarios</h3>
          <table className="table table-hover">
            <tbody>
              {users.map((user) => {
                return (
                  <>
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>
                        <Button
                          className="edit-user"
                          text="Editar"
                          type="button"
                          onClick={() =>
                            navigate(`/users/save/${user.id}`, {
                              replace: true,
                            })
                          }
                        />
                      </td>
                      <td>
                        <Button
                          className="remove-user"
                          text="Eliminar"
                          type="button"
                          onClick={() =>
                            navigate(`/users/edit/`, { replace: true })
                          }
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export { ViewUser };
