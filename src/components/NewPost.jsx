import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost({ discardPost, savePost }) {
    const [content, setContent] = useState({
        body: "",
        caption: ""
    });

    function handleOnChange(event) {
        event.preventDefault();
        const { id, value } = event.target;

        if (id === "body") {
            content.body = value;
        } else if (id === "title") {
            content.caption = value;
        }
        setContent(preValue => {
            return {
                body: preValue.body,
                caption: preValue.caption
            }
        });

        console.log(content);
    }

    function handleSaveButton(event) {
        event.preventDefault();
        savePost(content);
        discardPost();
    }


    return (
        <form className={styles.newpost}>
            <p>
                <label htmlFor="body">What's in your mind !</label>
                <textarea
                    id="body"
                    onChange={handleOnChange}
                    value={content.body}
                    required rows={3}
                />
            </p>
            <p>
                <label htmlFor="heading">Thought in one word</label>
                <input
                    type="text"
                    id="title"
                    onChange={handleOnChange}
                    value={content.caption}
                    required />
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={discardPost}>Discard</button>
                <button type="submit" onClick={handleSaveButton}>Post</button>
            </p>

        </form>
    );
}

export default NewPost;