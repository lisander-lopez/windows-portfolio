import React, { useEffect, useState } from "react";
import { getBooks, getBooksAPIKey } from "../../actions/DataActions";

import styles from "../../../css/booksilove.module.scss";

function BooksILove() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const func = async () => {
			const data = await Promise.all(
				getBooks().map(async (book) => {
					const res = await fetch(
						`https://www.googleapis.com/books/v1/volumes?q=isbn:${book}&key=${getBooksAPIKey()}`
					,
					);
					const data2 = await res.json();
					return data2.items[0].volumeInfo;
				})
			);
			await setBooks(data);
		};
		func();
	}, []);
	const renderBooks = () => {
		return books.map((book, i) => {
			return (
				<div key={i}>
					<span>{book.title}</span>
					<img src={book.imageLinks.smallThumbnail} alt="Book Cover" />
				</div>
			);
		});
	};
	return <div className={styles.container}>{books && renderBooks()}</div>;
}

export default BooksILove;
