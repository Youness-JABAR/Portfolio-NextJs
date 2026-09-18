const NAV_OFFSET = 80;

export const scrollIntoView = (targetSection: string) => {
	if (!targetSection) {
		return;
	}
	const section = document.getElementById(targetSection);
	if (!section) {
		return;
	}

	const top =
		section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
	window.scrollTo({ top, behavior: 'smooth' });
};
