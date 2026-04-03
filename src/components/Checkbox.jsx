function Checkbox({ id, checked, onChange, ...rest }) {
	return (
		<input
			type="checkbox"
			id={id}
			checked={checked}
			onChange={onChange}
			{...rest}
		/>
	);
}

export default Checkbox;
