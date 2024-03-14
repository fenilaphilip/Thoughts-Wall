import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal.jsx";


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


            <Post title={title} body={content} />

        </>
    )
}

export default PostList;