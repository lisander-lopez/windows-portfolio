import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFolder,
	faFilePdf,
	faTrashAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { getEmail, getGitHub, getLinkedIn } from "../actions/DataActions";

import styles from "../../css/desktop.module.scss";
import { useAppList } from "../context/AppListState";
import Draggable from "react-draggable";

export default function Desktop({ className }) {
	const [appList, dispatch] = useAppList();
	// We need this state to allow a drag not to trigger on click
	// Got answer from https://github.com/react-grid-layout/react-draggable/issues/531
	const [dragging, setDragging] = useState(false);

	const triggerOpen = (name) => {
		if(!dragging) {
			dispatch({ name: name, type: "open" });
		}
	}

	const triggerExternalLink = (type) => {
		if(!dragging){
			switch (type) {
				case 'email':
					window.open(getEmail(), "_blank");
					break;
				
				case 'linkedin':
					window.open(getLinkedIn(), "_blank");
					break;
				
				case 'github':
					window.open(getGitHub(), "_blank");
					break;
				
				default:
					break;
			}
		}
	}

	return (
		<div className={`${styles["grid-container"]} ${className}`}>
			
			<Draggable
				onDrag={()=>{setDragging(true);}}
				onStop={()=>{setTimeout(() => (setDragging(false)), 0); }}>
				<div
					className={styles["grid-project"]}
					onClick={ () => { triggerOpen('projects') }}
					role="button"
					tabIndex={0}
				>
					<FontAwesomeIcon icon={faFolder} size="4x" fixedWidth />
					<span>Projects</span>
				</div>
			</Draggable>

			<Draggable
				onDrag={()=>{setDragging(true);}}
				onStop={()=>{setTimeout(() => (setDragging(false)), 0); }}>
				<div
					className={styles["grid-resume"]}
					onClick={ () => { triggerOpen('resume') }}
					role="button"
					tabIndex={0}
				>
					<FontAwesomeIcon icon={faFilePdf} size="4x" fixedWidth />
					<span>Resume.pdf</span>
				</div>
			</Draggable>

			<Draggable
				onDrag={()=>{setDragging(true);}}
				onStop={()=>{setTimeout(() => (setDragging(false)), 0); }}>
				<div
					className={styles["grid-trash"]}
					onClick={ () => { triggerOpen('recycle') }}
					role="button"
					tabIndex={0}
				>
					<FontAwesomeIcon icon={faTrashAlt} size="4x" fixedWidth />
					<span>Recycle Bin</span>
				</div>
			</Draggable>

			<Draggable
				onDrag={()=>{setDragging(true);}}
				onStop={()=>{setTimeout(() => (setDragging(false)), 0); }}>
				<div
					className={styles["grid-email"]}
					onClick={ () => { triggerExternalLink('email') }}
					role="button"
					tabIndex={0}
				>
					<FontAwesomeIcon icon={faEnvelope} size="4x" fixedWidth />
					<span>Email</span>
				</div>
			</Draggable>

			<Draggable
				onDrag={()=>{setDragging(true);}}
				onStop={()=>{setTimeout(() => (setDragging(false)), 0); }}>
				<div
					className={styles["grid-github"]}
					onClick={ () => { triggerExternalLink('github') }}
					role="button"
					tabIndex={0}
				>
					<FontAwesomeIcon icon={faGithub} size="4x" fixedWidth />
					<span>GitHub</span>
				</div>
			</Draggable>

			<Draggable
				onDrag={()=>{setDragging(true);}}
				onStop={()=>{setTimeout(() => (setDragging(false)), 0); }}>
				<div
					className={styles["grid-linkedin"]}
					onClick={ () => { triggerExternalLink('linkedin') }}
					role="button"
					tabIndex={0}
				>
					<FontAwesomeIcon icon={faLinkedin} size="4x" fixedWidth />
					<span>LinkedIn</span>
				</div>
			</Draggable>
		</div>
	);
}
