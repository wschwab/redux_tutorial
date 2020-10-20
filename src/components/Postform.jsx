import React, { useState } from 'react'

const Postform = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const handleChange = e => setPost({ [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        const new_post = {
            title: post.title,
            body: post.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(new_post)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    
    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label><br/>
                    <input 
                        type="text" 
                        name="title" 
                        value={post.title} 
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Text: </label><br/>
                    <textarea 
                        name="body" 
                        value={post.body} 
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Postform;
