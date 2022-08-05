import React, { FC } from 'react';
import { Button } from '../../../Components';
import { Props } from '../../Form/type';

const AddEditCategory: FC<Props>= ({title}) => {

    return (
        <div className="container card card-form primary-form p-4">
            <h3 className="text-center">{title}</h3>
            <form>
                <div className='d-block flex-column container align-items-center' >
                    <div className='flex-column'>
                        <label htmlFor="nameCat" className="fw-semibold">Nombre</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className='flex-column'>
                        <label htmlFor="nameSlug" className="fw-semibold">Slug</label>
                        <input type="text" className="form-control" />
                    </div>

                    {/* <Button className='btn' onClick={()=>} text="Agregar" type='submit'/> */}

                </div>
              

            </form>
            
        </div>
    )
}

export { AddEditCategory }