import { useEffect, useRef, useState } from "react";
import Item from "./Item";
import Button from "./Button";

function TodoList() {
	const [tasks, setTasks] = useState([
		{ id: "a99dcd18-6067-42dc-8b79-9d0bcf10c019", title: "Задача 1", done: false },
		{ id: "3bbd552e-edab-41f7-b230-dfe5bac20145", title: "Задача 2", done: false },
		{ id: "c4a0b2de-dc99-4949-aecb-bb0a70a3bbdb", title: "Задача 3", done: true },
		{ id: "20806d75-6dc9-4ba8-b07b-73e0fff37383", title: "Задача 4", done: false },
		{ id: "51a907e8-c023-4a76-a114-b996b51d1f31", title: "Задача 5", done: true },
	]);

	const [message, setMessage] = useState("");
	const timeoutIdRef = useRef(null);

	const showTaskChangeMessage = (taskId) => {
		if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
		setMessage(`Вы изменили задачу ${tasks.find(({ id }) => id === taskId).title} ${new Date().toLocaleString()}`);
		timeoutIdRef.current = setTimeout(() => setMessage(""), 5000);
	};

	useEffect(() => {
		return () => {
			if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
		};
	}, []);

	const checkboxChangeListener = (event) => {
		const id = event.target.id;
		setTasks(prev => {
			const newTasks = [...prev];
			const index = newTasks.findIndex((task) => task.id === id);
			newTasks[index] = { ...prev[index], done: event.target.checked };
			return newTasks;
		});
		showTaskChangeMessage(id);
	};

	const showCompletedTasksCount = () => {
		const completedTasks = tasks.filter((task) => task.done);
		setMessage(`Количество выполненных задач: ${completedTasks.length}`);
	};

	return (
		<>
			<Button onClick={showCompletedTasksCount}>Показать количество выполненных задач</Button>
			{message ? <p>{message}</p> : ""}
			<ul>
				{tasks.map((task) => {
					return <Item task={task} key={task.id} checkboxChangeListener={checkboxChangeListener} />;
				})}
			</ul>
		</>
	);
}

export default TodoList;