import React, { useEffect, useState } from "react";
import { getBooks } from "../../actions/DataActions";

import styles from "../../../css/booksilove.module.scss";

function BooksILove() {
	const [books, setBooks] = useState({
		data: null,
	});

	useEffect(() => {
		const func = async () => {
			console.log("BLAHH");
			let apiRequestData = "";
			getBooks().map((book) => {
				apiRequestData += `ISBN:${book},`; // Trailing , is fine
			});
			//https://www.googleapis.com/books/v1/volumes?q=isbn:0593084683
			const res = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${apiRequestData}`
			);
			const data = await res.json();
			setBooks({ data: data });
		};
		func();
	}, []);
	console.log(books);
	return (
		<div className={styles.container}>
			{
				books.data && "yes"

				// Object.keys(books.data).map((key) => {
				// 	console.log("Books", books);
				// 	console.log("Key", key);
				// 	console.log(books.data[key]);
				// 	const imgSrc = books.data[key].cover
				// 		? books.data[key].cover.small
				// 		: "#";
				// 	return (
				// 		<div key={key}>
				// 			<span>{books.data[key].title}</span>
				// 			<img src={imgSrc || "#"} alt="Book Cover" />
				// 		</div>
				// 	);
				// })
			}
		</div>
	);
}

export default BooksILove;
