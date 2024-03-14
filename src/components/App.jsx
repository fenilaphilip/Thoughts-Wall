import { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import PostList from './PostList';
import styles from "./App.module.css";



function App() {
    const [viewPostingWindow, setViewPostingWindow] = useState(false);
    function hideAndShow() {
        setViewPostingWindow(preValue => {
            return !preValue;
        })
    }

    return (
        <div className={styles.body}>
            <Header postingWindow={hideAndShow} />
            <main>
                <PostList showPostingWindow={viewPostingWindow} hidePostingWindow={hideAndShow} />
            </main>
            <Footer />
        </div>
    );
}

export default App;