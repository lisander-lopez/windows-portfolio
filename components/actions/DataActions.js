import DATA from "../../data.json";

export function getLinkedIn() {
	return DATA.LinkedIn;
}

export function getEmail() {
	return `mailto:${DATA.Email}`;
}

export function getGitHub() {
	return DATA.GitHub;
}

export function getProjects() {
	return DATA.Projects;
}

export function getResumeFileName() {
	return DATA.Resume;
}
