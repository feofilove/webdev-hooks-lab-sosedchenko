import './StatsScreen.css'
import ReadingCounter from './ReadingCounter.jsx'
import StatsSummary from './StatsSummary/StatsSummary.jsx'

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