import { useState } from "react"
import "./Button.css"

export default function Button({color,accion}){
    
    return(
        <button type="button" class={`btn btnCRUD ${color}`}>
            
            {accion}
        
        </button>
    )
}