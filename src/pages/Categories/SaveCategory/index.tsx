import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components";
import { useCategories } from "../../../hooks/useCategories";
import { Category, InitialCategory } from "../../../types";

const SaveCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getItem, save } = useCategories();

  const [category, setCategory] = useState<InitialCategory>({ name: "" });

  useEffect(() => {
    id &&
      getItem(id).then((data) => {
        if (data) {
          const { id, ...rest } = data;
          setCategory(rest);
        }
      });
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    save(category, id).then(() => {
      navigate("/categories", { replace: true });
    });
  };

  return (
    <div className="container card card-form primary-form p-4">
      <h3 className="text-center">
        {id ? <>Editar categoría</> : <>Agregar categoría</>}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="d-block flex-column container align-items-center">
          <div className="flex-column">
            <label htmlFor="nameCat" className="fw-semibold">
              Nombre
            </label>
            <input
              type="text"
              name="nameCat"
              className="form-control"
              value={category.name}
              onChange={(e) =>
                setCategory((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex-column">
            <label htmlFor="nameSlug" className="fw-semibold">
              Slug
            </label>
            <input
              type="text"
              name="nameSlug"
              className="form-control"
              value={category.slug}
              onChange={(e) =>
                setCategory((prevState) => ({
                  ...prevState,
                  slug: e.target.value,
                }))
              }
            />
          </div>

          <Button
            className="btn-dark m-2"
            text={id ? "Editar" : "Agregar"}
            type="submit"
          />
          <Button
            className="btn-dark m-2"
            text="Cancelar"
            type="button"
            onClick={() => navigate("/categories", { replace: true })}
          />
        </div>
      </form>
    </div>
  );
};

export { SaveCategory };
