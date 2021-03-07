const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const heading = document.querySelector("h3");

smallCups.forEach((cup, idx) => {
	cup.addEventListener("click", () => {
		highlightCups(idx);
	});
});

const highlightCups = (idx) => {
	// console.log(!smallCups[idx].nextElementSibling?.classList.contains("full"));
	if (
		smallCups[idx].classList.contains("full") &&
		!smallCups[idx].nextElementSibling?.classList.contains("full")
	) {
		idx--;
	}
	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add("full");
		} else {
			cup.classList.remove("full");
		}
	});
	updateBigCup();
};

const updateBigCup = () => {
	const fullCups = document.querySelectorAll(".cup-small.full").length;
	const totalCups = smallCups.length;
	//console.log(fullCups, totalCups);
	const fullBigCup = fullCups / totalCups;
	// console.log(fullBigCup);
	if (fullCups === 0) {
		percentage.style.visibility = "hidden";
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = "visible";
		percentage.style.height = `${fullBigCup * 330}px`;
		percentage.textContent = `${fullBigCup * 100}%`;
	}

	if (fullCups === totalCups) {
		remained.style.visibility = "hidden";
		remained.style.height = 0;
		heading.textContent = "Yay! Goal Achieved🥳";
	} else {
		remained.style.visibility = "visible";
		remained.style.height = "55px";
		liters.textContent = `${2 - (250 * fullCups) / 1000}L`;
		heading.textContent = "Goal: 2 Liters";
	}
};
