import React from "react";
import {
	getAboutMeHeaderText,
	getAboutMeContent,
} from "../../actions/DataActions";

import styles from "../../../css/aboutmecontent.module.scss";

function AboutMeContent() {
	return (
		<div className={styles.container}>
			<h1>{getAboutMeHeaderText()}</h1>
			<p>{getAboutMeContent()}</p>
		</div>
	);
}

export default AboutMeContent;
