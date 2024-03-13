import styles from "./Post.module.css";

function Post(props) {
    return (<div className={styles.poster}>
        <h1 className={styles.heading}>{props.heading}</h1>
        <p className={styles.post}>{props.detail}</p>
    </div>);

}

export default Post;