import { useState } from "react";
import Head from "next/head";
import {
	faFolder,
	faFilePdf,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../css/index.module.scss";

import Desktop from "../components/desktop/Desktop";
import Footer from "../components/footer/Footer";

export default function Home() {
	const [appList, setAppList] = useState([]);
	const isDuplicate = (program) => {
		return appList.filter((e) => e.name === program).length > 0;
	};
	const openApp = (action) => {
		switch (action.program) {
			case "projects":
				setAppList((list) => {
					const newList = [...list];
					if (!isDuplicate(action.program)) {
						newList.push({ name: "projects", state: "active", img: faFolder });
					}
					return newList;
				});
				break;
			case "resume":
				setAppList((list) => {
					const newList = [...list];
					if (!isDuplicate(action.program)) {
						newList.push({ name: "resume", state: "active", img: faFilePdf });
					}
					return newList;
				});
				break;
			case "recycle":
				setAppList((list) => {
					const newList = [...list];
					if (!isDuplicate(action.program)) {
						newList.push({ name: "recycle", state: "active", img: faTrashAlt });
					}
					return newList;
				});
				break;
			default:
				break;
		}
	};
	return (
		<>
			<Head>
				<title>Desktop - Lisander Lopez</title>
			</Head>
			<div
				className={styles["error-modal"]}
				data-portrait="Your device is currently in Portrait Mode, Please make it landscape to continue!"
				data-height="This device does not have the required height to display this website."
			>
				Error:
			</div>
			<div className={styles["main-container"]}>
				<Desktop
					className={styles["grid-container"]}
					openApp={(app) => {
						openApp(app);
					}}
				/>
				<Footer className={styles["footer-container"]} appList={appList} />
			</div>
		</>
	);
}
