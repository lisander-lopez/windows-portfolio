import React, { Component, Fragment } from "react";
import styles from "../../css/footer.module.scss";

export default class Footer extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<div className={this.props.className + " " + styles["main-container"]}>
				<div className={styles["left-foot"]}>
					<div className={styles["logo-wrapper"]}>
						<img
							className={styles["win-logo"]}
							src="/images/windowsLogo.png"
						></img>
					</div>
				</div>
				<div className={styles["right-foot"]}>Time and Date</div>
			</div>
		);
	}
}
