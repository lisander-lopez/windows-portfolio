import React from "react";
import styles from "../../css/applist.module.scss";

export default function AppList(props) {
	return (
		<div className={props.className + " " + styles["wrapper"]}>
			<h1>App List</h1>
		</div>
	);
}
