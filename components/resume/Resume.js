import { Document, Page, pdfjs } from "react-pdf";
import { worker } from "react-pdf/dist/pdf.worker.entry";
import { getResumeFileName } from "../actions/DataActions";
import React from "react";

import styles from "../../css/resume.module.scss";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

export default function Resume() {
	const ResumePath = `/${getResumeFileName()}`;
	return (
		<div>
			<Document file={ResumePath}>
				<Page className={styles.page} pageNumber={1} />
			</Document>
		</div>
	);
}
