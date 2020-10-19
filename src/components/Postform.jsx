import React, { useState } from 'react'

const Postform = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const handleChange = e => setPost({ [e.target.name]: e.target.value})
    
    return (
        <div>
            <h1>Add Post</h1>
            <form>
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
