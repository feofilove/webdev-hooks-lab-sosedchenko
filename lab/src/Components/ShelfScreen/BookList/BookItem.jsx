import './BookItem.css'

const coverPalette = ['#7c5a3c', '#4f6b52', '#7a3b3b', '#3f5566', '#8a6b3f', '#5c4a72'];

function BookItem({ book, onToggleRead, onDelete }) {
	const coverColor = coverPalette[book.id % coverPalette.length];

	return (
		<div className="book-row">
			<div className="book-cover" style={{ background: coverColor }}>{book.title[0] || '?'}</div>
			<div className="book-info">
				<p className={`book-title ${book.read ? 'done' : ''}`}>{book.title}</p>
				<div className="book-author">{book.author}</div>
			</div>
			<button
				className={`read-check ${book.read ? 'checked' : ''}`}
				type="button"
				onClick={() => onToggleRead(book.id)}
				aria-label={book.read ? 'Отметить книгу непрочитанной' : 'Отметить книгу прочитанной'}
			>
				<span className="check-circle">✓</span>
				<span className="read-label">Прочитано</span>
			</button>
			<button className="delete-btn" type="button" onClick={() => onDelete(book.id)} title="Убрать с полки" aria-label="Убрать с полки">✕</button>
		</div>
	)
};

export default BookItem;