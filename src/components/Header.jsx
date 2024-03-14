import { MdDataThresholding, MdStickyNote2 } from 'react-icons/md';

import styles from "./Header.module.css"

function Header({ postingWindow }) {

    return (
        <header className={styles.header}>
            <h1 className={styles.name}>
                <MdDataThresholding size={50} />
                Thoughts Wall
            </h1>
            <button
                className={styles.newpost}
                onClick={postingWindow}>
                <MdStickyNote2 size={20} />
                New Thought
            </button>
        </header>
    );
}


export default Header;