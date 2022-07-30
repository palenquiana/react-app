const AddUser = () => {
    return(
        <>
            <div className="container card card-form primary-form p-4">
                <h3 className="text-center">Agregar usuarios</h3>
                <form>
                    <div className='d-block flex-column container align-items-center' >
                        <div>
                            <label htmlFor="name" className="fw-semibold">Nombre</label>
                            <input type="text" className="form-control " />
                        </div>
                        <div>
                            <label htmlFor="email" className="fw-semibold">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="name" className="fw-semibold">Contraseña</label>
                            <input type="text" className="form-control" />
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}
export { AddUser } 