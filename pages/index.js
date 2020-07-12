import Head from "next/head";
import styles from "../css/index.module.scss";

import { Fragment } from "react";

import Desktop from "../components/desktop/Desktop";
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
				<Desktop className={styles["grid-container"]} />
				<Footer className={styles["footer-container"]} />
			</div>
		</Fragment>
	);
}
