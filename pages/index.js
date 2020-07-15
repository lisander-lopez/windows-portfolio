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
import Program from "../components/desktop/Program";

const isDuplicate = (list, name) => {
	return list.filter((e) => e.name === name).length > 0;
};
const addAppToList = (list, name, img) => {
	if (!isDuplicate(list, name)) {
		list.forEach((element, index) => {
			if (element.state === "active") {
				const program = list[index];
				program.state = "inactive";
			}
		});
		list.push({ name, state: "active", img });
		return true;
	}
	return false;
};
const renderApps = (list) => {
	const index = list.findIndex((elem) => elem.state === "active");
	if (index !== -1) {
		return <Program app={list[index]} />;
	}
	return <></>;
};

export default function Home() {
	const [appList, setAppList] = useState([]);
	const openApp = (action) => {
		switch (action.program) {
			case "projects":
				setAppList((list) => {
					const newList = [...list];
					addAppToList(newList, action.program, faFolder);
					return newList;
				});
				break;
			case "resume":
				setAppList((list) => {
					const newList = [...list];
					addAppToList(newList, action.program, faFilePdf);
					return newList;
				});
				break;
			case "recycle":
				setAppList((list) => {
					const newList = [...list];
					addAppToList(newList, action.program, faTrashAlt);
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
				{renderApps(appList)}
				<Footer className={styles["footer-container"]} appList={appList} />
			</div>
		</>
	);
}
