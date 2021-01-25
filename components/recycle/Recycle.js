import React from "react";
import styles from "../../css/recycle.module.scss";
import { getOldPortfolios } from "../actions/DataActions";

function Recycle() {
	const items = getOldPortfolios();
	return (
		<div className={styles.grid}>
			<div className={styles.header + " " + styles.row}>
				<div className={styles.cell}>
					<span>Name</span>
				</div>
				<div className={styles.cell}>
					<span>Description</span>
				</div>
				<div className={styles.cell}>
					<span>Link</span>
				</div>
				<div className={styles.cell}>
					<span>Created At</span>
				</div>
			</div>
			{items.map((item) => {
				return (
					<div
						key={item.title}
						className={styles.row}
						onClick={() => {
							window.open(item.link.url, "_blank");
						}}
					>
						<div className={styles.cell}>
							<span>{item.title}</span>
						</div>
						<div className={styles.cell}>
							<span>{item.description}</span>
						</div>
						<div className={styles.cell}>
							<span>{item.link.type}</span>
						</div>
						<div className={styles.cell}>
							<span>{item.created}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Recycle;
