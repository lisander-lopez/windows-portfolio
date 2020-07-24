import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize, faTimes } from "@fortawesome/free-solid-svg-icons";

import { faSquare } from "@fortawesome/free-regular-svg-icons";
import styles from "../../css/program.module.scss";
import { useAppList } from "../context/AppListState";

import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";

// Took this code from https://stackoverflow.com/questions/2332811/capitalize-words-in-string/7592235#7592235
const capitalize = (s) => {
	return s.toLowerCase().replace(/\b./g, (a) => {
		return a.toUpperCase();
	});
};

export default function Program({ app }) {
	const [appList, dispatch] = useAppList();
	console.log(app.name);
	return (
		<>
			<Head>
				<title>{`${capitalize(app.name)} - Lisander Lopez`}</title>
			</Head>
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
						<div
							className={styles["close-wrap"]}
							onClick={() => {
								dispatch({ name: app.name, type: "close" });
							}}
							role="button"
							tabIndex={0}
						>
							<FontAwesomeIcon icon={faTimes} size="1x" />
						</div>
					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.container}>
						{app.name === "projects" && <Portfolio />}
						{app.name === "resume" && <Resume />}
					</div>
				</div>
			</div>
		</>
	);
}
