import React, {useState}  from "react";

const SearchComponent : React.FC = () => {
    const users = [
        {name: "amit", age: 30},
        {name: "shyam", age: 20},
        {name: "john", age: 40},
        {name: "admin", age: 25},
    ];

    const onButtonClick = () =>{
        let user = users.find(x => { return  x.name === searchString});
        setUser(user);
    };

    const [searchString, setSerachString] = useState("");
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    return (<div>
        <input type='text' value={searchString} onChange={(e) => setSerachString(e.target.value)}></input>
        <button onClick={onButtonClick}>Search</button>
        { user!=null? <div>found</div> : <div>not found</div>}
        { user!=null? <div>{user.name}-{user.age}</div> : null}
    </div>);
};

export default SearchComponent; 