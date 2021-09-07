const STARTING_VAL = 0
var counter = STARTING_VAL

function main(){
    console.log("Ready");
    document.querySelector("#decButton").onclick = (event) => {
        counter = counter - 1;
        updateView();
    }
    document.querySelector("#incButton").onclick = (event) => {
        counter = counter + 1;
        updateView();
    }
    document.querySelector("#rButton").onclick = (event) => {
        counter = STARTING_VAL;
        updateView();
    }
}

function updateView() {
    document.querySelector("#count").innerHTML = `Count = ${counter}`;
}

main()