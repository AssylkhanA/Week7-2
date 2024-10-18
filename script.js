const getElemId = id => document.getElementById(id);

function calculateBMI() {
    const weight = parseFloat(getElemId('weight').value);
    const height = parseFloat(getElemId('height').value);
    if (weight && height) {
        const bmi = weight / (height * height);
        let message;
        if (bmi < 18.5) {
            message = `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            message = `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
        } else {
            message = `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
        }
        getElemId('bmiResult').innerHTML = message;
    } else {
        getElemId('bmiResult').innerHTML = 'Please enter valid numbers for both weight and height.';
    }
}

function decideLunch() {
    const namesInput = getElemId('names').value;
    const namesArray = namesInput.split(',');
    if (namesArray.length > 0 && namesArray[0] !== '') {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        getElemId('lunchResult').innerHTML = `${namesArray[randomIndex].trim()} is going to buy lunch today.`;
    } else {
        getElemId('lunchResult').innerHTML = 'Please enter at least one name.';
    }
}

function generateFibonacci() {
    const num = parseInt(getElemId('fibonacciNumber').value);
    if (num > 0) {
        let sequence = [0, 1];
        for (let i = 2; i < num; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        getElemId('fibonacciResult').innerHTML = sequence.slice(0, num).join(', ');
    } else {
        getElemId('fibonacciResult').innerHTML = 'Please enter a positive number.';
    }
}
