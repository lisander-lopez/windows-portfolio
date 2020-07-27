import React, { useState } from "react";
import styles from "../../../css/aboutme.module.scss";

export default function AboutMe() {
	const [active, setActive] = useState(0); //0 = About me, 1 = My hobbies, 2 = My Passion, 3 = Books I love

	const changeTab = (tab) => {
		setActive(tab);
	};
	return (
		<>
			<div className={styles.header}>
				<nav>
					<ul>
						<li
							className={active == 0 ? styles.active : ""}
							onClick={() => {
								setActive(0);
							}}
						>
							About Me
						</li>
						<li
							className={active == 1 ? styles.active : ""}
							onClick={() => {
								setActive(1);
							}}
						>
							My Passion
						</li>
						<li
							className={active == 2 ? styles.active : ""}
							onClick={() => {
								setActive(2);
							}}
						>
							My Intrests
						</li>
						<li
							className={active == 3 ? styles.active : ""}
							onClick={() => {
								setActive(3);
							}}
						>
							Books I Love
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.container}>
				{active == 0 && <div>About Me</div>}
				{active == 1 && <div>My Passion</div>}
				{active == 2 && <div>My Intrests</div>}
				{active == 3 && <div>Books I Love</div>}
			</div>
		</>
	);
}
