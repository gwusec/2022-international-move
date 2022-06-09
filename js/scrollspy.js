window.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.target.parentNode.nodeName == "ARTICLE") {
				const id = entry.target.getAttribute('id');
				if (entry.intersectionRatio > 0.1) {
					document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
					var others = document.querySelectorAll(`nav li a:not([href="#${id}"])`)
					others.forEach(entry => entry.classList.remove('active'));
				}
			}
		});
	});
	// Track all sections that have an `id` applied
	var container = document.querySelector("article");
	container.querySelectorAll('h1[id], h2[id], h3[id]').forEach((section) => {
		observer.observe(section);
	});
});
