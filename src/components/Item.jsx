import Checkbox from "./Checkbox";
import Label from "./Label";

function Item({ task, checkboxChangeListener }) {
	const labelText = `${task.title} - ${task.done ? "выполнено" : "не выполнено"}`;

	return (
		<li>
			<Checkbox id={task.id} checked={task.done} onChange={checkboxChangeListener} />
			<Label htmlFor={task.id}>{labelText}</Label>
		</li>
	);
}

export default Item;