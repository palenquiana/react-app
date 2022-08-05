import React from 'react';
import { FC } from 'react';
import { Prop } from './type-card'


const Card: FC<Prop> = ( {children, className, id}) =>{
    return(
        <>
            <div className={`card ${className}`} id={id}>
                {/* agregamos un card title? */}
                <div className='card-body'>
                    {children}    
                </div>
            </div>
        </>



    )


}
export { Card }
