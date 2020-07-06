import Head from "next/head";
import styles from "../css/index.module.scss";

import { Fragment } from "react";
//6 Rows
export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Desktop - Lisander Lopez</title>
			</Head>
			<div className={styles["grid-container"]}>
				<div className={styles["grid-project"]}>Project Goes here</div>
				<div className={styles["grid-resume"]}>Resume goes here</div>
				<div className={styles["grid-trash"]}> Trash goes here</div>
				<div className={styles["grid-github"]}>Git hub goes here</div>
				<div className={styles["grid-linkedin"]}> Linked in goes here</div>
				<div className={styles["grid-email"]}> email goes here</div>
			</div>
		</Fragment>
	);
}
