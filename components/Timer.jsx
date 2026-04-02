import { useEffect, useState } from "react";

function getCurrentTime() {
	return new Date().toLocaleTimeString();
}

function Timer() {
	const [time, setTime] = useState(getCurrentTime());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(getCurrentTime());
			console.log("time change!");
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<p>
			{time}
		</p>
	);
}

export default Timer;