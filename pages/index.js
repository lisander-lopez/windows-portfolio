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
			<div className={styles["grid-container"]}>
				<div className={styles["grid-project"]}>
					<div className={styles["grid-icon"]}>
						<FontAwesomeIcon icon={faFolder} />
						<span>Projects</span>
					</div>
				</div>
				<div className={styles["grid-resume"]}>
					<div className={styles["grid-icon"]}>
						<FontAwesomeIcon icon={faFilePdf} />
						<span>Resume.pdf</span>
					</div>
				</div>
				<div className={styles["grid-trash"]}>
					<div className={styles["grid-icon"]}>
						<FontAwesomeIcon icon={faTrashAlt} />
						<span>Recycle Bin</span>
					</div>
				</div>
				<div className={styles["grid-github"]}>
					<div className={styles["grid-icon"]}>
						<FontAwesomeIcon icon={faGithub} />
						<span>GitHub</span>
					</div>
				</div>
				<div className={styles["grid-linkedin"]}>
					<div className={styles["grid-icon"]}>
						<FontAwesomeIcon icon={faLinkedin} />
						<span>LinkedIn</span>
					</div>
				</div>
				<div className={styles["grid-email"]}>
					<div className={styles["grid-icon"]}>
						<FontAwesomeIcon icon={faEnvelope} />
						<span>Email</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
