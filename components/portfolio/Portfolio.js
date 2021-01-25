import React, { Component, useState, useEffect } from "react";
import { contextType } from "react-modal";
import styles from "../../css/portfolio.module.scss";

import { getProjects } from "../actions/DataActions";

export default function Portfolio() {
	const [sortParams, setSortParams] = useState({
		// 0 means Ascesnding, 1 means Descending
		name: {
			sorted: false,
			direction: 0,
		},
		desc: {
			sorted: false,
			direction: 0,
		},
		link: {
			sorted: false,
			direction: 0,
		},
		created: {
			sorted: false,
			direction: 0, 
		}
	});

	const [items, setItems] = useState(getProjects());
	const sortBy = (group) => {
		console.log("Sroting!");
		setSortParams(oldParams => {
			const copy = oldParams;
			Object.keys(copy).forEach(key => {
				copy[key].sorted = false;
			});
			copy[group].sorted = true;
			copy[group].direction = (copy[group].direction + 1 ) % 2;
			return copy;
		});
	}

	// Whenever we change sortParams we must reflect it in the rendered list
	useEffect(() => {
		setItems(oldItems=> {
			console.log("SOrtfield");
			let copy = oldItems;
			// Find which one we have to sort by
			let sortField;
			Object.keys(sortParams).forEach(key => {
				if(sortParams[key].sorted)
					sortField = key;
			});
			copy.sort((a,b) => {
				if (a[sortField] < b[sortField]) {
					return -1;
				  }
				  if (a[sortField] > b[sortField]) {
					return 1;
				  }
				  return 0;
			});
			return copy;
		});
	}, [sortParams])
	return (
		<div className={styles.grid}>
			<div className={`${styles.header} ${styles.row}`}>
				<div className={`${styles.cell} ${(sortParams.name.sorted) ? styles.sort : ' '} ${sortParams.name.direction}`}>
					<span>Name</span>
				</div>
				<div className={styles.cell}>
					<span>Description</span>
				</div>
				<div className={styles.cell}>
					<span>Link</span>
				</div>
				<div className={styles.cell}>
					<span 
						onClick={()=>{
							sortBy("created");
						}} 
						role="button"
						tabIndex={0}	
					> 
						Created At
					</span>
				</div>
			</div>
			{items.map((item) => {
				console.log(item);
				return (
					<div
						key={item.title}
						className={styles.row}
						onClick={() => {
							window.open(item.link.url, "_blank");
						}}
						role="button"
						tabIndex={0}
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
