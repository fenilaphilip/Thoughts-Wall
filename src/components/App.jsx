import Header from './Header';
import Footer from './Footer';
import PostList from './PostList';
import styles from "./App.module.css";



function App() {
    return (
        <div className={styles.body}>
            <Header />
            <PostList />
            <Footer />
        </div>
    );
}

export default App;