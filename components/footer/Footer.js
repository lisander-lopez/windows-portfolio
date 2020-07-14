import React, { Component, Fragment, useEffect } from "react";
import styles from "../../css/footer.module.scss";
import AppList from "./AppList";
import TimeDate from "./TimeDate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Footer(props) {
	return (
		<div className={props.className + " " + styles["main-container"]}>
			<div className={styles["left-foot"]}>
				<div className={styles["logo-wrapper"]}>
					<img
						className={styles["win-logo"]}
						src="/images/windowsLogo.png"
					></img>
				</div>
				<div className={styles["search-wrapper"]}>
					<FontAwesomeIcon
						className={styles["search-icon"]}
						icon={faSearch}
						size="1x"
					/>
					<input
						type="text"
						name=""
						id="searchBox"
						placeholder="Click here to know me better"
					/>
				</div>
				<AppList
					className={styles["app-list-wrapper"]}
					appList={props.appList}
				/>
			</div>
			<div className={styles["right-foot"]}>
				<TimeDate />
			</div>
		</div>
	);
}
