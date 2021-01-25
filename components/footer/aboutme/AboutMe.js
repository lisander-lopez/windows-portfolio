import React, { useState } from "react";
import styles from "../../../css/footer/aboutme.module.scss";
import AboutMeContent from "./AboutMeContent";
import MyPassion from "./MyPassion";
import MyHobbies from "./MyHobbies";
import BooksILove from "./BooksILove";

export default function AboutMe() {
	const [active, setActive] = useState(0); //0 = About me, 1 = My hobbies, 2 = My Passion, 3 = Books I love

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
							My Hobbies
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
				{active == 0 && <AboutMeContent />}
				{active == 1 && <MyPassion />}
				{active == 2 && <MyHobbies />}
				{active == 3 && <BooksILove />}
			</div>
		</>
	);
}
