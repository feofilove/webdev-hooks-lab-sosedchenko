function ReadingCounter({ value, onDecrease, onIncrease, onReset }) {
	return (
		<div className="session-card">
			<p className="session-title">Страниц прочитано сегодня</p>
			<p className="session-sub">Обновляйте счётчик после каждой сессии чтения</p>
			<div className="counter-row">
				<button className="counter-btn" type="button" onClick={onDecrease} disabled={value === 0}>−</button>
				<span className="counter-value">{value}</span>
				<button className="counter-btn" type="button" onClick={onIncrease}>+</button>
			</div>
			<button className="btn ghost counter-reset" type="button" onClick={onReset}>Сбросить счётчик</button>
		</div>
	)
};

export default ReadingCounter;