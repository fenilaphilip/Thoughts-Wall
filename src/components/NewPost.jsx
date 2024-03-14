
import styles from "./NewPost.module.css";

function NewPost({ content, setContent, hide }) {

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

        // console.log(content);
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
            <button className={styles.action}>Post</button>
        </form>
    );
}

export default NewPost;