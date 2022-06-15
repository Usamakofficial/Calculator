// getNumber
function number(num){
    var result = document.getElementById('screen');
        result.value += num;
}

// // getresult
function result(){
    var result = document.getElementById("screen");
    result.value = eval(result.value);
}

// clear result
function clearResult(){
    var result = document.getElementById('screen');
    result.value = "";
}

// deletecharacter
function deleteChar(){
    var number = document.getElementById('screen');
    var remove = number.value;
    remove = remove.slice(0,-1); //remove last character from a strings
    number.value = remove;
}



