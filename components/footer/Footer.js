import React, { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "../../css/footer.module.scss";
import AppList from "./AppList";
import Modal from "react-modal";
import TimeDate from "./TimeDate";
import AboutMe from "./aboutme/AboutMe";

Modal.defaultStyles.overlay.backgroundColor = "transparent";
Modal.setAppElement("body");
export default function Footer({ className }) {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<div className={`${className} ${styles["main-container"]}`}>
			<div className={styles["left-foot"]}>
				<div className={styles["logo-wrapper"]}>
					<img
						className={styles["win-logo"]}
						src="/images/windowsLogo.png"
						alt="Windows Logo"
					/>
				</div>
				<div
					className={`${styles["search-wrapper"]} ${
						isSearchOpen ? styles["active"] : ""
					}`}
					onClick={() => {
						setIsSearchOpen(true);
					}}
				>
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
				<Modal
					isOpen={isSearchOpen}
					onRequestClose={() => {
						setIsSearchOpen(false);
					}}
					className={styles.modal}
					overlayClassName={styles["overlay-modal"]}
					contentLabel="About Me Section"
					shouldReturnFocusAfterClose={false}
				>
					<AboutMe />
				</Modal>
				<AppList className={styles["app-list-wrapper"]} />
			</div>
			<div className={styles["right-foot"]}>
				<TimeDate />
			</div>
		</div>
	);
}
