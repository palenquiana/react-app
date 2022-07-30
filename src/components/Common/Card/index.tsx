import React from 'react';
import { FC } from 'react';
import { Prop } from './type-card'


const Card: FC<Prop> = ( {children}) =>{
    return(
        <>
        <div>
            
            {children}

        </div>
        

        </>



    )


}
export { Card }
