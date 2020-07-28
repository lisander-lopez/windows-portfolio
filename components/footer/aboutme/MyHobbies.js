import React from "react";
import { getHobbies } from "../../actions/DataActions";

import styles from "../../../css/myhobbies.module.scss";

function MyHobbies() {
	return (
		<div className={styles.header}>
			{getHobbies().map((hobby) => {
				return (
					<div>
						<span>{hobby.text}</span>
						<img src={hobby.imgURL} alt={hobby.text + " Picture"} />
					</div>
				);
			})}
		</div>
	);
}

export default MyHobbies;
