'use strict'; 
// const tabs = document.querySelector(".tabs");
// const tab=document.querySelectorAll('.tabs__blocks')
// const tails=document.querySelectorAll('.tabs__tail')
// const mobileBtn=document.querySelectorAll('.mobileTail__mountain')
// tabs.onclick = e => {
//     const id = e.target.dataset.id;
//     if (id) {
     
//         tails.forEach(btn => {
//         btn.classList.remove("active");
//       });
      
//       e.target.classList.add("active");
  
//       tab.forEach(content => {
//         content.classList.remove("active");
//       });
//       mobileBtn.forEach(content => {
//         content.classList.remove("active");
//       });

//       const element = document.getElementById(id);
//       element.classList.add("active");
//     }
  
//   }

const labels = document.querySelectorAll(".mobileTail__mountain__decsr");
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
		};    
	});

	labels.forEach(function(label) {
		const tabItem = label.parentElement;

		if (tabItem.dataset.actabGroup === group) {
			if (tabItem.dataset.actabId === id) {
				tabItem.classList.add("active");
        
			} else {
				tabItem.classList.remove("active");
        
			}
		};

    labels.forEach((label) => {
      label.addEventListener('click', () => {
          removeActiveClasses()
          label.classList.add('active')
      })
  })
});
}


labels.forEach(function(label) {
	label.addEventListener("click", toggleShow);
});

tabs.forEach(function(tab) {
	tab.addEventListener("click", toggleShow);
});

function removeActiveClasses() {
  labels.forEach(label => {
    label.classList.remove('active')
  })
}