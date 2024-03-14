import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import notes from '../notes.js';
import styles from "./App.module.css";



function App() {
    return (
        <div className={styles.body}>
            <Header />
            {notes.map((note) => <Post
                key={note.key}
                heading={note.title}
                detail={note.content}
            />
            )}
            <Footer />
        </div>
    );
}

export default App;