import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal.jsx";
import notes from '../notes.js';

function PostList({ showPostingWindow, hidePostingWindow }) {
    const [content, setContent] = useState({
        body: "",
        caption: ""
    });

    return (
        <>
            {showPostingWindow ?
                <Modal view={hidePostingWindow}>
                    <NewPost content={content} setContent={setContent} discardPost={hidePostingWindow} />
                </Modal>
                : null}

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