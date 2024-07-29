// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";

function bmi2(weight, height) {
    let w = Number(weight);
    let h = Number(height);
    let result = '';
    if(w/(h*h)<=18.5){
        result = 'Underweight';
    }else if(w/(h*h)<=25.0){
        result = 'Normal';
    }else if(w/(h*h)<=30.0){
        result = 'Overweight';
    }else{
        result = 'Obese';
    }
    return result;
}