import React, { useState } from "react";
import styles from "../../css/aboutme.module.scss";

export default function AboutMe() {
	const [active, setActive] = useState(0); //0 = About me, 1 = My hobbies, 2 = My Passion, 3 = Books I love
	return (
		<>
			<div className={styles.header}>
				<nav>
					<ul>
						<li class={active == 0 ? styles.active : ""}>About Me</li>
						<li class={active == 1 ? styles.active : ""}>My Passion</li>
						<li class={active == 2 ? styles.active : ""}>My Intrests</li>
						<li class={active == 3 ? styles.active : ""}>Books I Love</li>
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
