import React, { Component, useState, useEffect } from "react";
import { contextType } from "react-modal";
import styles from "../../css/portfolio.module.scss";

import { getProjects } from "../actions/DataActions";

export default function Portfolio() {
	const [sortParams, setSortParams] = useState({
		// 1 means Ascesnding, -1 means Descending
		name: {
			sorted: false,
			direction: 1,
		},
		description: {
			sorted: false,
			direction: 1,
		},
		link: {
			sorted: false,
			direction: 1,
		},
		created: {
			sorted: false,
			direction: 1, 
		}
	});

	const [items, setItems] = useState(getProjects());
	const sortBy = (group) => {
		setSortParams(oldParams => {
			const copy = oldParams;
			Object.keys(copy).forEach(key => {
				copy[key].sorted = false;
			});
			copy[group].sorted = true;
			copy[group].direction = copy[group].direction * -1;
			return copy;
		});
		
		setItems(oldItems=> {
			
			let copy = [...oldItems];
			// Find which one we have to sort by
			let sortField;
			Object.keys(sortParams).forEach(key => {
				if(sortParams[key].sorted)
					sortField = key;
			});
			
			let sortedData = copy.sort((a,b) => {
				if (sortField === "created"){
					let dateA = new Date(a[sortField]);
					let dateB = new Date(b[sortField]);

					if( dateA < dateB) { return -1 * sortParams[sortField].direction; }
					if( dateA > dateB) { return 1 *  sortParams[sortField].direction; }
					return 0;
				}

				if (sortField === "link"){
					let linkA = a[sortField]["type"];
					let linkB = b[sortField]["type"];

					if( linkA < linkB) { return -1 * sortParams[sortField].direction; }
					if( linkA > linkB) { return 1 *  sortParams[sortField].direction; }
					return 0;
				} 
				if(a[sortField] < b[sortField]) { return -1 * sortParams[sortField].direction; }
				if(a[sortField] > b[sortField]) { return 1 * sortParams[sortField].direction; }
				return 0;
			});

			return sortedData;			
		});		
	}

	// Whenever we change sortParams we must reflect it in the rendered list

	return (
		<div className={styles.grid}>
			<div className={`${styles.header} ${styles.row}`}>
				<div className={`${styles.cell}`}>
					<span
						onClick={()=>{
							sortBy("name");
						}} 
						role="button"
						tabIndex={0}	
					>
						Name
					</span>
				</div>
				<div className={styles.cell}>
					<span
						onClick={()=>{
							sortBy("description");
						}} 
						role="button"
						tabIndex={0}	
					>
						Description
					</span>
				</div>
				<div className={styles.cell}>
					<span
						onClick={()=>{
							sortBy("link");
						}} 
						role="button"
						tabIndex={0}	
					>
						Link
					</span>
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
							<span>{item.name}</span>
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
