import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const tabs = ['posts', 'albums', 'todos']


function UseEffect() {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${type}`)
            .then((post) => {
                setPosts(post.data);

            })
            .catch(e => {
                console.log('error', e);
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY >200)
        }
        window.addEventListener('scroll', handleScroll)
        return() => {
            window.removeEventListener('scroll',handleScroll)
        }
       
    },[])
    return (
        <div >
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => { setType(tab) }}
                    style={tab === type ? { backgroundColor: "black", color: 'white' } : {}}
                >{tab}</button>
            ))}
            {posts.map(post => (

                <li key={post.id} >{post.title}</li>
            ))}
            {scroll && <button 
            style={
                {
                    position:'fixed',
                    right: 20,
                    bottom:20
                }
            }
            >PutOnTop</button>}
        </div>
    )
}


export default UseEffect;