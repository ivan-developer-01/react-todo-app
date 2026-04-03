function Checkbox({ id, checked, onChange }) {
	return (
		<input
			type="checkbox"
			id={id}
			checked={checked}
			onChange={onChange}
		/>
	);
}

export default Checkbox;
