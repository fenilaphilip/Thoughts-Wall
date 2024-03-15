import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal.jsx";
import styles from "./PostList.module.css";


function PostList({ showPostingWindow, hidePostingWindow }) {
    const [list, setList] = useState([{
        body: "React is awesome!",
        caption: "React"
    }]);

    function addPost(content) {
        console.log(`addpost ${content}`)
        setList(preValue => {
            return [...preValue, content];
        })
    }
    return (
        <div className={styles.body}>
            {
                showPostingWindow ?
                    <Modal view={hidePostingWindow}>
                        <NewPost
                            discardPost={hidePostingWindow}
                            savePost={addPost}
                        />
                    </Modal>
                    : null
            }

            {
                list.length > 0 && (
                    list.map((post, index) => {
                        return (
                            <div >
                                <Post Key={index} title={post.caption} body={post.body} />
                            </div>
                        )
                    })
                )
            }

            {
                list.length === 0 && (
                    <div>
                        <p>There are no posts yet!</p>
                        <p>Start adding some!</p>
                    </div>
                )
            }


        </div>
    )
}

export default PostList;