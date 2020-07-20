import React, { Component } from "react";
import styles from "./portfolio.module.scss";

import { getProjects } from "../actions/DataActions";

export default function Portfolio() {
	const items = getProjects();

	return (
		<div className={styles.grid}>
			<div className={styles.header}>
				<span>Name</span>
				<span>Description</span>
				<span>Type</span>
				<span>Date Created</span>
			</div>
			{items.map((item) => {
				return (
					<div key={item.title}>
						<span>{item.title}</span>
						<span>{item.description}</span>
						<span>{item.link}</span>
						<span>{item.created}</span>
					</div>
				);
			})}
		</div>
	);
}
