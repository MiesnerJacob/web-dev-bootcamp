// BMI Calculator function with varies return values

function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);

    if (bmi > 24.9) {
        return `Your BMI is ${bmi}, so you are overweight.`
    } else if (bmi <= 24.9 && bmi >= 18.5) {
        return `Your BMI is ${bmi}, so you have a normal weight.`
    } else {
        return `Your BMI is ${bmi}, so you are underweight.`
    }
    return interpretation;
}
