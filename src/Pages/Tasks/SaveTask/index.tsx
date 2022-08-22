import { FC, useState } from "react";
import { Button } from "../../../Components";

import { categoriesApi, mapToArray } from "../../../Api";
import { Select } from "../Select";
import { Task } from "../../../Type";

const AddEditTask = () => {
  // const cat: [] = [];

  // const getData = async () => {
  //   const reponse = await getCategories();
  //   const data = mapToArray(reponse);
  //   data.push(cat);
  //   return data;
  // };
  // getData();

  const [task, setTask] = useState<Task>();

  return (
    <>
      <div className="card card-form primary-form container p-1">
        <h3 className="text-center">Card</h3>
        <form>
          <div className="d-flex flex-column align-items-center ">
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
                name=""
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
            <div>
              <select name="catOp" id="">
                <option value=""></option>
              </select>
            </div>

            <div>
              <label htmlFor="" className="fw-bold">
                Estado
              </label>
              <div>
                <input type="radio" name="pendiente" id="" className="me-1" />
                <label htmlFor="pendiente">Pendiente</label>
              </div>

              <div>
                <input type="radio" name="enProceso" id="" className="me-1" />
                <label htmlFor="enProceso">En proceso</label>
              </div>
              <div>
                <input type="radio" name="realizado" id="" className="me-1" />
                <label htmlFor="realizado">Realizado</label>
              </div>
            </div>

            <div>
              {/* <Select name="catOp" id="selecCat" optionMap={cat} /> */}

              {/* {data.map(({op})=>{
                                    return(<option value={data} key={op}></option>)
                                })} */}
            </div>
          </div>
          <Button className="" text="Agregar" type="submit"></Button>
        </form>
      </div>
    </>
  );
};
export { AddEditTask };
