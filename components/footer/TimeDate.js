import React, { useState, useEffect } from "react";
import styles from "../../css/timedate.module.scss";

export default function TimeDate() {
	// Got the following code from https://productoptimist.com/start-using-react-hooks-a-clock-timer-example/
	const [date, setDate] = useState(new Date());

	const tick = () => {
		setDate(new Date());
	};

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return function cleanup() {
			clearInterval(timerID);
		};
	});

	const renderTime = () => {
		let string = "";
		string += date.getHours() < 13 ? date.getHours() : date.getHours() - 12;
		string += ":";
		date.getMinutes() <= 9
			? (string += `0${date.getMinutes()}`)
			: (string += `${date.getMinutes()}`);
		date.getHours() < 13 ? (string += " AM") : (string += " PM");
		return string;
	};

	const renderDate = () => {
		let string = "";
		string += `${date.getMonth() + 1}/`; // Month is 0 indexed ... Why JS?
		string += `${date.getDate()}/`;
		string += date.getFullYear();
		return string;
	};
	return (
		<>
			<span className={styles["time-text"]}>{renderTime()}</span>
			<span className={styles["date-text"]}>{renderDate()}</span>
		</>
	);
}
