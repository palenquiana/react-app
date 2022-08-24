import React from "react";
import { Button, Layout } from "../../components";

const Register = () => {
  return (
    <>
      <Layout hideNav page="register">
        <div className="card-login">
          <div className="card primary-form p-3">
            <h2 className="text-center">Registrar usuario</h2>
            <form action="">
              <fieldset className="mb-3">
                <label htmlFor="name" className="form-label">
                  Ingrese su nombre y apellido
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Juan Perez"
                />
              </fieldset>
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
                  Ingrese su clave
                </label>
                <input type="password" id="pass" className="form-control" />
              </fieldset>
              <fieldset className="mb-3">
                <label htmlFor="pass" className="form-label">
                  Ingrese nuevamente su clave
                </label>
                <input type="password" id="pass" className="form-control" />
              </fieldset>

              <Button text="Confirmar" type="submit" className="btn-dark m-2" />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export { Register };
