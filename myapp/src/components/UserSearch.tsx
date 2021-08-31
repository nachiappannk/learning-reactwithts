import React from "react";

interface UserSearchProps {
    users: {
        name: string;
        age: number;
    }[]
}

interface UserSearchState {
    name: string;
    user: {name: string, age: number} | undefined;
}

export default class UserSearch extends React.Component<UserSearchProps> {
    
    state: UserSearchState = {
        name : '',
        user: undefined,
    }
    onButtonClick(){
        const users = [
            {name: "amit", age: 30},
            {name: "shyam", age: 20},
            {name: "john", age: 40},
            {name: "admin", age: 25},
        ];

        var user = users.find(x => x.name === this.state.name);
        this.setState({user : user});
    }
    
    render(){
        return (
            <div>
                <input type='text' value={this.state.name} onChange={(e) => {
                    console.log('on changed input');
                    
                    this.setState({ name: e.target.value});


                }}
                ></input>
                <button onClick={this.onButtonClick}>Search</button>
                { this.state.user!=null? <div>found</div> : <div>not found</div>}
                { this.state.user!=null? <div>{this.state.user.name}-{this.state.user.age}</div> : null}
            </div>
        );
    }
}