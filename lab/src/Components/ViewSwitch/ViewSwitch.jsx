import './ViewSwitch.css'

function ViewSwitch({ currentScreen, onChange }) {
	return (
		<div className="view-switch">
			<button className={`view-btn ${currentScreen === 'shelf' ? 'active' : ''}`} type="button" onClick={() => onChange('shelf')}>
				Моя полка
			</button>
			<button className={`view-btn ${currentScreen === 'stats' ? 'active' : ''}`} type="button" onClick={() => onChange('stats')}>
				Статистика
			</button>
		</div>
	)
}

export default ViewSwitch
