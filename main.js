//Get the output screen
let outputScreen = document.getElementById("output");

//display operation
function display(num){
    outputScreen.value += num;
}

//to calculate any given input and catch error
function calculate(){
    try {
        outputScreen.value = eval(outputScreen.value)
    } catch (error) {
        alert("invalid")
    }
}

// to clear screen
function Clear(){
    outputScreen.value = " ";
}

// to delete a mistake or something
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}
