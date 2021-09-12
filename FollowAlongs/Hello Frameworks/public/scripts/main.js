var rhit = rhit || {};

/** globals */
rhit.variableName = "";

rhit.updateCounter = function () {
	
};

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	let buttons = document.querySelectorAll("#button-group button")
	buttons.forEach((button) => {
		button.onclick = (event) => {
			const amount = parseInt(button.dataset.amount);
			const isMult = button.dataset.isMult;

			if(isMult){

			}else{

			}

		};
	});
};

rhit.main();
