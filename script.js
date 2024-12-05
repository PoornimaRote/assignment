// Sample data
const data = [
	{ id: 1, title: "Post about JavaScript", category: "category1" },
	{ id: 2, title: "Understanding HTML and CSS", category: "category2" },
	{ id: 3, title: "Getting Started with Python", category: "category1" },
	{ id: 4, title: "Web Development Basics", category: "category2" },
];

// Function to perform search
function performSearch() {
	const query = document.getElementById("searchInput").value.toLowerCase();
	const filter = document.getElementById("filterSelect").value;
	const results = document.getElementById("results");

	// Clear previous results
	results.innerHTML = "";

	// Filter and display results
	const filteredData = data.filter((item) => {
		const matchesSearch = item.title.toLowerCase().includes(query);
		const matchesFilter = filter === "all" || item.category === filter;
		return matchesSearch && matchesFilter;
	});

	if (filteredData.length > 0) {
		filteredData.forEach((item) => {
			const li = document.createElement("li");
			li.textContent = item.title;
			results.appendChild(li);
		});
	} else {
		results.innerHTML = "<li>No results found.</li>";
	}
}
