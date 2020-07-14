import React from "react";
import styles from "../../css/applist.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*
App list is an array of this object
{
	name: "projects",
	state: "active",
	img: faFolder
}
*/
export default function AppList(props) {
	const renderAppDisplay = () => {
		let content = [];
		props.appList.forEach((element, index) => {
			const { name, state, img } = element;
			content.push(
				<div key={index} className={styles[name] + " " + styles[state]}>
					{<FontAwesomeIcon icon={img} size={"2x"} />}
				</div>
			);
		});
		return content;
	};
	return (
		<div className={props.className + " " + styles["wrapper"]}>
			{renderAppDisplay()}
		</div>
	);
}
