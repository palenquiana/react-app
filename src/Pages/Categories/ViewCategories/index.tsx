import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesApi } from "../../../Api/categories";
import { Button, Layout } from "../../../Components";
import { Category } from "../type-category";

const ViewCategories = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    categoriesApi.getAll().then((response) => setCategories(response));
  }, []);

  return (
    <>
      <Layout page="categories">
        <div className="container">
          <div className="d-flex flex-row-reverse">
            <Button
              text="Agregar categoría"
              onClick={() => navigate("/categories/add", { replace: true })}
              type="button"
              className="btn-dark m-2"
            />
          </div>

          <h3>Categorías</h3>
          <table className="table table-hover">
            <tbody>
              {categories.map((category) => {
                return (
                  <>
                    <tr>
                      <td>{category.name}</td>
                      <td>
                        <Button
                          className="edit-category"
                          text="Editar"
                          type="button"
                          onClick={() =>
                            navigate(`/categories/edit/`, { replace: true })
                          }
                        />
                      </td>
                      <td>
                        <Button
                          className="remove-category"
                          text="Eliminar"
                          type="button"
                          onClick={() =>
                            navigate(`/categories/edit/`, { replace: true })
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
export { ViewCategories };
