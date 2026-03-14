function addtodisplay(value) {
    document.getElementById("num").value += value;
}

function clearDisplay() {
    document.getElementById("num").value = " "
}

function calculator() {
    var expression = document.getElementById("num").value

    var result = eval(expression)
    document.getElementById("num").value = result
}