import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ViewSwitch from './Components/ViewSwitch/ViewSwitch.jsx'
import ShelfScreen from './Components/ShelfScreen/ShelfScreen.jsx'
import StatsScreen from './Components/StatsScreen/StatsScreen.jsx'

function App() {
    const [currentScreen, setCurrentScreen] = useState('shelf');

    const [books, setBooks] = useState([
        { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
        { id: 2, title: 'Маленькая жизнь', author: 'Ханья Янагихара', read: false },
        { id: 3, title: 'Пиранези', author: 'Сюзанна Кларк', read: false },
    ])
    const [showOnlyUnread, setShowOnlyUnread] = useState(false);
    const [pagesToday, setPagesToday] = useState(0);

    function addBook(title) {
        setBooks((currentBooks) => {
            const nextId = currentBooks.reduce((maxId, book) => Math.max(maxId, book.id), 0) + 1
            return [...currentBooks, { id: nextId, title, author: 'Автор не указан', read: false }]
        })
    };

    return (
        <main className="app">
            <header className="app-header">
                <div className="brand">
                    <div className="brand-mark">S</div>
                    <div className="brand-name">Shelf</div>
                </div>

                <ViewSwitch currentScreen={currentScreen} onChange={setCurrentScreen} />
            </header>

        {currentScreen === 'shelf' ? (
            <ShelfScreen
                books={books}
                showOnlyUnread={showOnlyUnread}
                onAddBook={addBook}
                onToggleFilter={setShowOnlyUnread}
                onToggleRead={(bookId) => {
                    setBooks((currentBooks) => currentBooks.map((book) => (
                        book.id === bookId ? { ...book, read: !book.read } : book
                    )))
                }}
                onDeleteBook={(bookId) => {
                    setBooks((currentBooks) => currentBooks.filter((book) => book.id !== bookId))
                }}
            />
        ) : (
            <StatsScreen
                books={books}
                pagesToday={pagesToday}
                onDecrease={() => setPagesToday((pages) => Math.max(0, pages - 1))}
                onIncrease={() => setPagesToday((pages) => pages + 1)}
                onReset={() => setPagesToday(0)}
            />
        )}
        </main>
    );
};

export default App;