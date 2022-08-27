import { useNavigate } from "react-router-dom";
import { Button, Layout } from "../../../components";
import { useCategories } from "../../../hooks/useCategories";

const ViewCategories = () => {
  const navigate = useNavigate();

  const { get, remove, save, categories } = useCategories();

  return (
    <>
      <Layout page="categories">
        <div className="container">
          <div className="d-flex flex-row-reverse">
            <Button
              text="Agregar categoría"
              onClick={() => navigate("/categories/save", { replace: true })}
              type="button"
              className="btn-dark m-2"
            />
          </div>

          <h3>Categorías</h3>
          <table className="table table-hover">
            <tbody>
              {categories.map((category) => {
                return (
                  <tr key={category.id}>
                    <td>{category.name}</td>
                    <td>
                      <Button
                        className="edit-category"
                        text="Editar"
                        type="button"
                        onClick={() =>
                          navigate(`/categories/save/${category.id}`, {
                            replace: true,
                          })
                        }
                      />
                    </td>
                    <td>
                      <Button
                        className="remove-category"
                        text="Eliminar"
                        type="button"
                        onClick={() => remove(category.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};
export { ViewCategories };
