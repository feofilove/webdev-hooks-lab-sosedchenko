function FilterChip({ checked, onChange }) {
	return (
		<div className="filter-chip">
			<input
				id="filterCheckbox"
				type="checkbox"
				checked={checked}
				onChange={(event) => onChange(event.target.checked)}
			/>
			<label htmlFor="filterCheckbox"><span className="dot" />Только непрочитанные</label>
		</div>
	)
};

export default FilterChip;