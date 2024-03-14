import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import notes from '../notes.js';

function PostList() {
    const [content, setContent] = useState({
        body: "",
        caption: ""
    });

    return (
        <>
            <NewPost content={content} setContent={setContent} />
            <Post title={content.caption} body={content.body} />
            {notes.map((note) => {
                return (
                    <Post title={note.title} body={note.content} />
                );
            })
            }
        </>
    )
}

export default PostList;