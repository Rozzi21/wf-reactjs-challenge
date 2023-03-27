import React from "react";

const ButtonFunction = ({color,text = "halo"}) => {
    return <button style={{color: color}}>
        {text}</button>
}



export default ButtonFunction;