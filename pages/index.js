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

import Footer from "../components/footer/Footer";

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
			<div className={styles["main-container"]}>
				<div className={styles["grid-container"]}>
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
				<Footer className={styles["footer-container"]} />
			</div>
		</Fragment>
	);
}
