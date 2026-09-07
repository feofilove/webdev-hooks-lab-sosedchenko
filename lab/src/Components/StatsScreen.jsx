import ReadingCounter from './ReadingCounter'
import StatsSummary from './StatsSummary'

function StatsScreen({ books, pagesToday, onDecrease, onIncrease, onReset }) {
	return (
		<section className="screen">
			<p className="greeting">Статистика</p>
			<p className="greeting-sub">Как продвигается чтение</p>
			<StatsSummary books={books} />
			<ReadingCounter
				value={pagesToday}
				onDecrease={onDecrease}
				onIncrease={onIncrease}
				onReset={onReset}
			/>
		</section>
	)
};

export default StatsScreen;