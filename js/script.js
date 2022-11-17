'use strict'; 

const labels = document.querySelectorAll(".tabs__tail");
const tabs = document.querySelectorAll(".tabs__tail");

function toggleShow() {
	const target = this;
	const item = target.classList.contains("tabs__tail")
		? target
		: target.parentElement;
	const group = item.dataset.actabGroup;
	const id = item.dataset.actabId;

	tabs.forEach(function(tab) {
		if (tab.dataset.actabGroup === group) {
			if (tab.dataset.actabId === id) {
				tab.classList.add("active");       
			} else {
				tab.classList.remove("active");       
			}
		}
	});
	labels.forEach(function(label) {
		const tabItem = label.parentElement;

		if (tabItem.dataset.actabGroup === group) {
			if (tabItem.dataset.actabId === id) {
				tabItem.classList.add("active");
        
			} else {
				tabItem.classList.remove("active");
        
			}
		}
});
}

 



labels.forEach(function(label) {
	label.addEventListener("click", toggleShow);
});

tabs.forEach(function(tab) {
	tab.addEventListener("click", toggleShow);
});
