import BookForm from './BookForm'
import BookList from './BookList'
import FilterChip from './FilterChip'

function pluralBooks(count) {
	const mod10 = count % 10
	const mod100 = count % 100
	if (mod10 === 1 && mod100 !== 11) return 'книга'
	if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return 'книги'
	return 'книг'
};

function ShelfScreen({ books, showOnlyUnread, onAddBook, onToggleFilter, onToggleRead, onDeleteBook }) {
	const visibleBooks = showOnlyUnread ? books.filter((book) => !book.read) : books
	const subtitle = books.length === 0 ? 'На полке пока пусто' : `На полке ${books.length} ${pluralBooks(books.length)}`

	return (
		<section className="screen">
			<p className="greeting">Добрый вечер</p>
			<p className="greeting-sub">{subtitle}</p>
			<BookForm onAdd={onAddBook} />
			<div className="list-toolbar">
				<span className="toolbar-title">Книги</span>
				<FilterChip checked={showOnlyUnread} onChange={onToggleFilter} />
			</div>
			<BookList books={visibleBooks} onToggleRead={onToggleRead} onDelete={onDeleteBook} />
		</section>
	)
};

export default ShelfScreen;