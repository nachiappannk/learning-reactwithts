import React, {useState} from "react";

const GuestList : React.FC = () => {

    const [names, setNames] = useState(''); 
    return (
        <div>
            <input type='text' value={names} onChange={(e) => setNames(e.target.value)}></input>
            <div>test guest list</div>
            <button >Add Guest</button>
        </div>
    );
};

export default GuestList;

