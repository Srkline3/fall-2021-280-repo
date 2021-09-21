/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * ur mum hahahah
 * lol jk it's Trey
 */

let counter = 0;

function main(){
	document.getElementById("minusButton").addEventListener("click", () => {
		counter = counter - 1;
		updateView();
	});
	document.getElementById("plusButton").addEventListener("click", () => {
		counter++;
		updateView();
	});
	document.getElementById("resetButton").addEventListener("click", () => {
		counter = 0;
		updateView();
	});

	let sillyButtons = document.querySelectorAll("#colorButtons button");
	let favoriteColor = document.getElementById("favoriteColorBox");
	sillyButtons.forEach((button) => {
		button.addEventListener("click", () => {
			favoriteColor.style.backgroundColor = button.dataset.color;
			favoriteColor.innerHTML = button.dataset.color;
		})
	});
}

function updateView() {
    document.getElementById("counter").innerHTML = `${counter}`;
}

main();
