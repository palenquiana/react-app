import { FC } from "react"

type Props = {
    name:string,
    id: string,
    optionMap:[]

}
const Select:FC<Props> = ({name, id,optionMap}) =>{
    return(
        <select name={name} id={id}>
            {optionMap.map(({op})=>{
                return(<option value={op} ></option>)
                // key={id}
            })}
        </select>

    )
  
}
export { Select }