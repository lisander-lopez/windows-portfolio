import React from "react";
import { getPassions } from "../../actions/DataActions";
import styles from "../../../css/mypassion.module.scss";

function MyPassion() {
	return (
		<div className={styles.container}>
			{getPassions().map((passion) => {
				return <li>{passion}</li>;
			})}
		</div>
	);
}

export default MyPassion;
