//initialize the variables - Getting input from user
  let chemistry = document.getElementById("chemistry");
  let phy = document.getElementById("physics");
  let maths = document.querySelector("#maths");
  let eng = document.querySelector("#eng");
  let display = document.querySelector("#display");
  let grades = "";


//class initialization
class Calculate {
    constructor(chem, phys, math, engl){
        this.chem = chem;
        this.phys = phys;
        this.math = math;
        this.engl = engl;
    }
    totalGrade(){
        // Typecasting the input
        let totalgrades =  parseFloat(this.chem) +  parseFloat(this.phys) 
                +  parseFloat(this.math) +  parseFloat(this.engl);
        return totalgrades;
    }
}

// Checking the condition for the providing the grade to student based on percentage
const percentageCal = (perct) => {
    if (perct <= 100 && perct >= 80) {
        grades = "A";
    } else if (perct <= 79 && perct >= 60) {
        grades = "B";
    } else if (perct <= 59 && perct >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }
    return grades;
}


const studF = () => { 

    const studentCal = new Calculate(chemistry.value, phy.value, maths.value, eng.value);

    //pass student percentage into a variable
    let percentage = (studentCal.totalGrade() / 400) * 100;

    // call percentage function and pass student percentage, store value in a variable
    const percentCal = percentageCal(percentage);        

    // Check to make sure input is not empty
    if (chemistry == "" || phy == "" || maths == "" || eng == "") {
        display.innerHTML  = "Please enter all the fields";
    } else {
        // Checking the condition for the fail and pass
        if (percentage >= 39.5) {
            display.innerHTML = ` Total Score: ${studentCal.totalGrade()} <br>
                    Percentage: ${percentage}% <br>
                    Your Grade: ${percentCal} <br>
                    Passed`;
        } else {
            display.innerHTML =  ` Total Score: ${studentCal.totalGrade()} <br>
                     Percentage: ${percentage}% <br>
                     Your Grade: ${percentCal} <br>
                    Failed`;
        }
    }  
}

document.getElementById('button').addEventListener('click', studF);