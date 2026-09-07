import { useState } from 'react'

function BookForm({ onAdd }) {
	const [title, setTitle] = useState('')

	function submitBook() {
		const trimmedTitle = title.trim()
		if (!trimmedTitle) return

		onAdd(trimmedTitle)
		setTitle('')
	};

	function handleKeyDown(event) {
		if (event.key === 'Enter') submitBook()
	};

	return (
		<div className="add-book-row">
			<input
				className="input"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Название книги..."
				aria-label="Название книги"
			/>
			<button className="btn" type="button" onClick={submitBook}>Добавить на полку</button>
		</div>
	)
};

export default BookForm;
