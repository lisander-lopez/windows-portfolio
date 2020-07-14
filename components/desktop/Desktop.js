import React from "react";

import styles from "../../css/desktop.module.scss";

import { getEmail, getGitHub, getLinkedIn } from "../actions/DataActions";
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
			<div
				className={styles["grid-project"]}
				onClick={() => {
					props.openApp({ program: "projects" });
				}}
			>
				<FontAwesomeIcon icon={faFolder} size="4x" fixedWidth />
				<span>Projects</span>
			</div>
			<div
				className={styles["grid-resume"]}
				onClick={() => {
					props.openApp({ program: "resume" });
				}}
			>
				<FontAwesomeIcon icon={faFilePdf} size="4x" fixedWidth />
				<span>Resume.pdf</span>
			</div>
			<div
				className={styles["grid-trash"]}
				onClick={() => {
					props.openApp({ program: "recycle" });
				}}
			>
				<FontAwesomeIcon icon={faTrashAlt} size="4x" fixedWidth />
				<span>Recycle Bin</span>
			</div>

			<div
				className={styles["grid-email"]}
				onClick={() => {
					window.open(getEmail(), "_blank");
				}}
			>
				<FontAwesomeIcon icon={faEnvelope} size="4x" fixedWidth />
				<span>Email</span>
			</div>

			<div
				className={styles["grid-github"]}
				onClick={() => {
					window.open(getGitHub(), "_blank");
				}}
			>
				<FontAwesomeIcon icon={faGithub} size="4x" fixedWidth />
				<span>GitHub</span>
			</div>

			<div
				className={styles["grid-linkedin"]}
				onClick={() => {
					window.open(getLinkedIn(), "_blank");
				}}
			>
				<FontAwesomeIcon icon={faLinkedin} size="4x" fixedWidth />
				<span>LinkedIn</span>
			</div>
		</div>
	);
}
