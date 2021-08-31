import React, {useState} from "react";

interface StateUnit {
    name: string;
    city: string;
}


const GuestList : React.FC = () => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [guests, setGuests] = useState<StateUnit[]>([]);
    
    const onClickButton = () =>{
        var newGuests = [...guests, {"name": name, "city": city }];
        setName('');
        setCity('');
        setGuests(newGuests);
    }

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type='text' value={city} onChange={(e) => setCity(e.target.value)}></input>
            <div>test guest list</div>
            <button onClick={onClickButton}>Add Guest</button>
            <ul>
                {guests.map((x) => {
                    return <li key={x.name}>{x.name}-{x.city}</li>
                })}
            </ul>
        </div>
    );
};

export default GuestList;

