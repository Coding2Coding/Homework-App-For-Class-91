function send() {
    firstNumber = document.getElementById("firstNumberInput").value;
    secondNumber = document.getElementById("secondNumberInput").value;
    actualAnswer = parseInt(firstNumber) * parseInt(secondNumber);
    var question = firstNumber + " multiplied by " + secondNumber;
    document.getElementById("question").innerHTML = question;
    document.getElementById("firstNumberInput").value = "";
    document.getElementById("secondNumberInput").value = "";
}