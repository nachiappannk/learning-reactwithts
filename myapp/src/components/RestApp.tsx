import React, { useEffect, useState } from "react";
import axios from 'axios';

interface IPost {
    id: number;
    userId?: number;
    title: string;
    body: string;
}

const RestApp = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');


    useEffect(() =>{
        axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then( (response) => {
            setPosts(response.data);
            setLoading(false);
        }).catch((ex) =>{
            let error =axios.isCancel(ex)
            ? 'A timeout has occured'
            : ex.response.status ===404
            ? 'Resource Not Found'
            : 'An unexpected error has occured'
            setError(error)
            setLoading(false)
        });
    }, []);
    return(
        <div className='container'>
            <div className='card'>
<ul className='list-group'>
    {posts.map((post)=>(
        <li key={post.id} className='list-group-item'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </li>
    ))}
</ul>
</div>
        </div>
    )

}

export default RestApp;