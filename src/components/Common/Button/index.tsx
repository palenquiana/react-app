import { type } from "os"
import { FC } from "react"

type Props= {
    text: string,
    onClick?: () => void,
    className: string
    type: 'reset' | 'button' | 'submit'
}
const Button:FC<Props> =( { text, onClick, className})=>{
    return(
        <>
            <button onClick={onClick} className={`btn ${className}`} >{text}</button> 
        
        </>
    )

}
export { Button } 