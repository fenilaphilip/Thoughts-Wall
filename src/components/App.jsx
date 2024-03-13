import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes.js';



function App() {
    return (
        <div>
            <Header />
            {notes.map((note) => < Note
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