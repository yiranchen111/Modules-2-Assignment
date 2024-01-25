function addNumbers() {
    var num1 = document.getElementById('addNum1').value;
    var num2 = document.getElementById('addNum2').value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById('addResult').innerHTML = 'Result: ' + sum;
    return false;
}


function multiNumbers() {
    var num1 = document.getElementById('multiNum1').value;
    var num2 = document.getElementById('multiNum2').value;
    var product = parseInt(num1) * parseInt(num2);
    document.getElementById('multiResult').innerHTML = 'Result: ' + product;
    return false;
}