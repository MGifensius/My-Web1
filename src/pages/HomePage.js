import axios from "axios";
import { useState, useEffect } from "react";

function HomePage(){
    //const [a, seta] = useState();

    //async function calling_api(){
        //const res = await fetch('./fee-assessment-categories')
        //const data = await res.json()
        //seta(data)
        //console.log(data)
    //}

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('./fee-assessment-categories')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ul>
                {
                    posts.map(post => <input type="button" value={post.name}></input>)
                }
            </ul>
        </div>
    );
}

export default HomePage;
 