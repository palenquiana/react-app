import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout } from "../../components";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout hideNav page="login">
        <div className="card-login">
          <div className="card primary-form p-3">
            <h2 className="text-center">Iniciar sesión</h2>
            <form>
              {" "}
              {/* Agregar validacion */}
              <fieldset className="mb-3">
                <label htmlFor="mail" className="form-label">
                  E-mail
                </label>
                <input
                  type="mail"
                  id="mail"
                  className="form-control"
                  placeholder="usuario@ada.com"
                />
              </fieldset>
              <fieldset className="mb-3">
                <label htmlFor="pass" className="form-label">
                  Clave
                </label>
                <input
                  type="password"
                  id="pass"
                  className="form-control"
                  placeholder="Juan Perez"
                />
              </fieldset>
              <Button text="Confirmar" type="submit" className="btn-dark m-2" />
            </form>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <p className="m-1">Si aun no se ha registrado</p>
              <Button
                text="Ingrese aquí"
                onClick={() => navigate("/register", { replace: true })}
                type="button"
                className="btn-secondary btn-sm"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export { Login };
