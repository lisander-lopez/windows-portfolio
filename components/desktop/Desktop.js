import React from "react";

import styles from "../../css/desktop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFolder,
	faFilePdf,
	faTrashAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Desktop(props) {
	return (
		<div className={styles["grid-container"] + " " + props.className}>
			<div className={styles["grid-project"]}>
				<FontAwesomeIcon icon={faFolder} size="4x" fixedWidth />
				<span>Projects</span>
			</div>
			<div className={styles["grid-resume"]}>
				<FontAwesomeIcon icon={faFilePdf} size="4x" fixedWidth />
				<span>Resume.pdf</span>
			</div>
			<div className={styles["grid-trash"]}>
				<FontAwesomeIcon icon={faTrashAlt} size="4x" fixedWidth />
				<span>Recycle Bin</span>
			</div>

			<div className={styles["grid-email"]}>
				<FontAwesomeIcon icon={faEnvelope} size="4x" fixedWidth />
				<span>Email</span>
			</div>

			<div className={styles["grid-github"]}>
				<FontAwesomeIcon icon={faGithub} size="4x" fixedWidth />
				<span>GitHub</span>
			</div>

			<div className={styles["grid-linkedin"]}>
				<FontAwesomeIcon icon={faLinkedin} size="4x" fixedWidth />
				<span>LinkedIn</span>
			</div>
		</div>
	);
}
