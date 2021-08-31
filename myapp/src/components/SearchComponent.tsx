import React, {useState}  from "react";

const SearchComponent : React.FC = () => {
    const users = [
        {name: "amit", age: 30},
        {name: "shyam", age: 20},
        {name: "john", age: 40},
        {name: "admin", age: 25},
    ];

    const onButtonClick = () =>{
        console.log("button clicked");
        let isUserFound = users.find(x => { return  x.name === searchString});
        if(isUserFound != null){
            setFound(true);
        }else{
            setFound(false);
        }
        
    };

    const [searchString, setSerachString] = useState("");
    const [found, setFound] = useState(false);

    return (<div>
        <input type='text' value={searchString} onChange={(e) => setSerachString(e.target.value)}></input>
        <button onClick={onButtonClick}>Search</button>
        { found? <div>found</div> : <div>not found</div>}
    </div>);
};

export default SearchComponent; 