import React, { Component, useEffect, useState } from "react";
import { getBooks, getBooksAPIKey } from "../../actions/DataActions";

import styles from "../../../css/footer/booksilove.module.scss";

// export class BooksILove extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			books: [],
// 		};
// 	}
// 	async componentDidMount() {
// 		if (this.state.books.length === 0) {
// 			const data = await Promise.all(
// 				getBooks().map(async (book) => {
// 					const res = await fetch(
// 						`https://www.googleapis.com/books/v1/volumes?q=isbn:${book}&key=${getBooksAPIKey()}`
// 					);
// 					const data = await res.json();
// 					return data.items[0].volumeInfo;
// 				})
// 			);
// 			this.setState((state) => {
// 				const books = [...state.books, data];

// 				return {
// 					books: books[0],
// 				};
// 			});
// 		}
// 	}
// 	render() {
// 		console.log("current State", this.state.books);
// 		return (
// 			<div className={styles.container}>
// 				{this.state.books.map((book) => {
// 					console.log("rendering", book);
// 					return <h1>hi</h1>;
// 				})}
// 			</div>
// 		);
// 	}
// }

// export default BooksILove;

function BooksILove() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const func = async () => {
			const data = await Promise.all(
				getBooks().map(async (book) => {
					const res = await fetch(
						`https://www.googleapis.com/books/v1/volumes?q=isbn:${book}&key=${getBooksAPIKey()}`
					);
					const data = await res.json();
					return data.items[0].volumeInfo;
				})
			);
			await setBooks(data);
		};
		func();
	}, []);
	const renderBooks = () => {
		console.log("Rendereing books!");
		console.log("rend", books);
		return books.map((book, i) => {
			console.log("we have books");
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
