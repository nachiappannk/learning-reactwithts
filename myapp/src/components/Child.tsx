import React from "react";

interface ChildProps {
    color : string;
    size?: string;
    newSize?: string;
    onClick : () => void;
}

export const Child :React.FC<ChildProps>  =   ({color, onClick, children}) =>{
    return (<div>
        <div>{color}</div>
        <button onClick={onClick}>hi</button>
        {children}
        <div>{color}</div>
    </div>);
}
 

Child.defaultProps = {
    size : "7"
}


// export const Child=({color} : ChildProps) =>{
//     return  <div>{color}</div>;
// }