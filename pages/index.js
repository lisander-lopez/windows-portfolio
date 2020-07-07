import Head from "next/head";
import styles from "../css/index.module.scss";

import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFolder,
	faFilePdf,
	faTrashAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Desktop - Lisander Lopez</title>
			</Head>
			<div
				className={styles["error-modal"]}
				data-portrait="Your device is currently in Portrait Mode, Please make it landscape to continue!"
				data-height="This device does not have the required height to display this website."
			>
				Error:{" "}
			</div>
			<div className={styles["container"]}>
				<div className={styles["grid-container"]}>
					<div className={styles["grid-project"]}>
						<div className={styles["grid-icon"]}>
							<FontAwesomeIcon icon={faFolder} size="8x" />
							<span>Projects</span>
						</div>
					</div>
					<div className={styles["grid-resume"]}>
						<div className={styles["grid-icon"]}>
							<FontAwesomeIcon icon={faFilePdf} size="8x" />
							<span>Resume.pdf</span>
						</div>
					</div>
					<div className={styles["grid-trash"]}>
						<div className={styles["grid-icon"]}>
							<FontAwesomeIcon icon={faTrashAlt} size="8x" />
							<span>Recycle Bin</span>
						</div>
					</div>
					<div className={styles["grid-github"]}>
						<div className={styles["grid-icon"]}>
							<FontAwesomeIcon icon={faGithub} size="8x" />
							<span>GitHub</span>
						</div>
					</div>
					<div className={styles["grid-linkedin"]}>
						<div className={styles["grid-icon"]}>
							<FontAwesomeIcon icon={faLinkedin} size="8x" />
							<span>LinkedIn</span>
						</div>
					</div>
					<div className={styles["grid-email"]}>
						<div className={styles["grid-icon"]}>
							<FontAwesomeIcon icon={faEnvelope} size="8x" />
							<span>Email</span>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
