import React from "react";

import styles from "../../css/program.module.scss";

export default function Program({ app }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				Header
				{app.name}
			</div>
			<div className="body">
				<div className="container">Container</div>
			</div>
		</div>
	);
}
