var rhit = rhit || {};

/** globals */
rhit.counter = 0;

rhit.main = function () {
	console.log("Ready");
	let buttons = document.querySelectorAll("#button-group button")
	buttons.forEach((button) => {
		button.onclick = (event) => {
			const amount = parseInt(button.dataset.amount);
			const isMult = button.dataset.isMult;
			rhit.updateCounter(amount, isMult);
		};
	});
};

rhit.updateCounter = (amount, isMult) => {
	if(isMult){
		rhit.counter *= amount;
	}else{
		rhit.counter += amount;
	}
	document.querySelector("#counter").innerHTML = `Count = ${rhit.counter}`;
}

rhit.main();
