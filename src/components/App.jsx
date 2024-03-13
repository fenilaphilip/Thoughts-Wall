import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import notes from '../notes.js';
import "./App.css";



function App() {
    return (
        <div>
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