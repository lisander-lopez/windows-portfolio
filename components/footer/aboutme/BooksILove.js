import React from "react";
import { getBooks } from "../../actions/DataActions";

import styles from "../../../css/booksilove.module.scss";

function BooksILove() {
	return (
		<div className={styles.container}>
			{getBooks().map((book) => {
				return <div>{book}</div>;
			})}
		</div>
	);
}

export default BooksILove;
