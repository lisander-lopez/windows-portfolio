import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../css/applist.module.scss";
/*
App list is an array of this object
{
	name: "projects",
	state: "active",
	img: faFolder
}
active == showing to the user
inactive == minimized 
Only one program can be seen at a time!
*/
import { useAppList } from "../context/AppListState";

export default function AppList({ className }) {
	const [appList, dispatch] = useAppList();

	const renderAppDisplay = () => {
		const content = [];
		appList.forEach((element) => {
			const { name, state, img } = element;
			content.push(
				<div
					key={name}
					className={`${styles[name]} ${styles[state]}`}
					onClick={() => {
						dispatch({ type: "focus", name });
					}}
					role="button"
					tabIndex={0}
				>
					<FontAwesomeIcon icon={img} size="2x" />
				</div>
			);
		});
		return content;
	};
	return (
		<div className={`${className} ${styles.wrapper}`}>{renderAppDisplay()}</div>
	);
}
