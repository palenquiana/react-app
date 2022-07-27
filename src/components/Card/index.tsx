import React from 'react';
import { FC } from 'react';
import { Card } from './type-card'


const Card: FC<Card> = ( {children}) =>{
    return(
        <>
        <div>
            
            {children}

        </div>
        

        </>



    )


}
export { Card }
