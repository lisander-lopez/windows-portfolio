import Head from "next/head";
import {
	faFolder,
	faFilePdf,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../css/index.module.scss";

import Desktop from "../components/desktop/Desktop";
import Footer from "../components/footer/Footer";
import AppRenderer from "../components/desktop/AppRenderer";

import { AppListProvider } from "../components/context/AppListState";

const isDuplicate = (list, name) => {
	return list.filter((e) => e.name === name).length > 0;
};
const addAppToList = (list, name, img, displayName) => {
	if (!isDuplicate(list, name)) {
		list.forEach((element, index) => {
			if (element.state === "active") {
				const program = list[index];
				program.state = "inactive";
			}
		});
		list.push({ name, state: "active", img, displayName });
		return true;
	}
	return false;
};

const openApp = (list, name) => {
	switch (name) {
		case "projects": {
			const newList = [...list];
			addAppToList(newList, name, faFolder, name);
			return newList;
		}
		case "resume": {
			const newList = [...list];
			addAppToList(newList, name, faFilePdf, name);
			return newList;
		}
		case "recycle": {
			const newList = [...list];
			addAppToList(newList, name, faTrashAlt, `${name} (Old Portfolios)`);
			return newList;
		}
		default:
			return list;
	}
};
const closeApp = (list, name) => {
	const newList = list.filter((e) => {
		return e.name !== name;
	});
	return newList;
};

const appFocused = (list) => {
	return (
		list.findIndex((e) => {
			return e.state === "active";
		}) 
	);
};

const focusApp = (list, name) => {
	const newList = [...list];
	// Check if NO app is currently focused
	const indexOfFocused = appFocused(newList);
	if (indexOfFocused !== -1) { // An app is focues
		newList[indexOfFocused].state = "inactive";
	}
	
	const appIndex = newList.findIndex((e) => {
		return e.name === name;
	});
	// If we could not find app that we want to focus
	if (appIndex === -1) {
		return newList;
	}

	newList[appIndex].state = "active";
	return newList;
};

const minimizeApp = (list, name) => {
	const newList = [...list];
	// Get currentApps index
	const appIndex = newList.findIndex((e) => {
		return e.name === name;
	});
	// If we could not find app that we want to focus
	if (appIndex === -1) {
		return newList;
	}

	newList[appIndex].state = "inactive";
	return newList;
};

export default function Home() {
	const initState = [];

	const reducer = (state, action) => {
		switch (action.type) {
			case "open":
				return openApp(state, action.name);
			case "close":
				return closeApp(state, action.name);
			case "focus":
				return focusApp(state, action.name);
			case "minimize":
				return minimizeApp(state, action.name);
			default:
				break;
		}
		return state;
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
				<AppListProvider initState={initState} reducer={reducer}>
					<Desktop className={styles["grid-container"]} />
					<AppRenderer />

					<Footer className={styles["footer-container"]} />
				</AppListProvider>
			</div>
		</>
	);
}
