import { useState } from "react"


export default function Button(){
    const [like,setLike]=useState(0)
    return(
        <button onClick={()=>setLike(like+1)}>{like} Like!</button>
    )
}