import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize, faTimes } from "@fortawesome/free-solid-svg-icons";

import { faSquare } from "@fortawesome/free-regular-svg-icons";
import styles from "../../css/program.module.scss";

export default function Program({ app }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles["header-left"]} />
				<div className={styles["header-middle"]}>{app.name}</div>
				<div className={styles["header-right"]}>
					<div className={styles["minimize-wrap"]}>
						<FontAwesomeIcon icon={faWindowMinimize} size="1x" />
					</div>
					<div className={styles["maximize-wrap"]}>
						<FontAwesomeIcon icon={faSquare} size="1x" />
					</div>
					<div className={styles["close-wrap"]}>
						<FontAwesomeIcon icon={faTimes} size="1x" />
					</div>
				</div>
			</div>
			<div className={styles.body}>
				<div className="container">Container</div>
			</div>
		</div>
	);
}
