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

export function getAboutMeHeaderText() {
	return DATA.AboutMe.header;
}

export function getAboutMeContent() {
	return DATA.AboutMe.content;
}

export function getPassions() {
	return DATA.Passions;
}

export function getHobbies() {
	return DATA.Hobbies;
}
export function getBooks() {
	return DATA.Books;
}
