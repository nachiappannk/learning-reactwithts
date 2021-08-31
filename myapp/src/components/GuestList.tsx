import React, {useState} from "react";

const GuestList : React.FC = () => {

    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);
    
    const onClickButton = () =>{
        var newGuests = [...guests, name];
        setName('');
        console.log(name);
        setGuests(newGuests);

        console.log(guests);
    }

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <div>test guest list</div>
            <button onClick={onClickButton}>Add Guest</button>
            <ul>
                {guests.map((x) => {
                    return <li key={x}>{x}</li>
                })}
            </ul>
        </div>
    );
};

export default GuestList;

