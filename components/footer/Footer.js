import React, { Component, Fragment } from "react";
import "../../css/footer.module.scss";

export default class Footer extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<div className={this.props.className}>
				<h1>This is the Footer</h1>
			</div>
		);
	}
}
