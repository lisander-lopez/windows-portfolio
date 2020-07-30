import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFolder,
	faFilePdf,
	faTrashAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { getEmail, getGitHub, getLinkedIn } from "../actions/DataActions";

import styles from "../../css/desktop.module.scss";
import { useAppList } from "../context/AppListState";

export default function Desktop({ className }) {
	const [appList, dispatch] = useAppList();
	return (
		<div className={`${styles["grid-container"]} ${className}`}>
			<div
				className={styles["grid-project"]}
				onClick={() => {
					dispatch({ name: "projects", type: "open" });
				}}
				role="button"
				tabIndex={0}
			>
				<FontAwesomeIcon icon={faFolder} size="4x" fixedWidth />
				<span>Projects</span>
			</div>
			<div
				className={styles["grid-resume"]}
				onClick={() => {
					dispatch({ name: "resume", type: "open" });
				}}
				role="button"
				tabIndex={0}
			>
				<FontAwesomeIcon icon={faFilePdf} size="4x" fixedWidth />
				<span>Resume.pdf</span>
			</div>
			<div
				className={styles["grid-trash"]}
				onClick={() => {
					dispatch({ name: "recycle", type: "open" });
				}}
				role="button"
				tabIndex={0}
			>
				<FontAwesomeIcon icon={faTrashAlt} size="4x" fixedWidth />
				<span>Recycle Bin</span>
			</div>

			<div
				className={styles["grid-email"]}
				onClick={() => {
					window.open(getEmail(), "_blank");
				}}
				role="button"
				tabIndex={0}
			>
				<FontAwesomeIcon icon={faEnvelope} size="4x" fixedWidth />
				<span>Email</span>
			</div>

			<div
				className={styles["grid-github"]}
				onClick={() => {
					window.open(getGitHub(), "_blank");
				}}
				role="button"
				tabIndex={0}
			>
				<FontAwesomeIcon icon={faGithub} size="4x" fixedWidth />
				<span>GitHub</span>
			</div>

			<div
				className={styles["grid-linkedin"]}
				onClick={() => {
					window.open(getLinkedIn(), "_blank");
				}}
				role="button"
				tabIndex={0}
			>
				<FontAwesomeIcon icon={faLinkedin} size="4x" fixedWidth />
				<span>LinkedIn</span>
			</div>
		</div>
	);
}
