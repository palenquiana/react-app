import { useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesApi } from "../../../Api/categories";
import { Button } from "../../../Components";
import { Category, InitialCategory } from "../../../Type";

const SaveCategory = () => {
  const { id } = useParams();
  const initialData = { name: "" };

  const [category, setCategory] = useState<InitialCategory>(initialData);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    categoriesApi.save(category, id);
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
            className="btn"
            text={id ? "Editar" : "Agregar"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export { SaveCategory };
