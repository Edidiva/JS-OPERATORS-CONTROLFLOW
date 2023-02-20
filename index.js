const Science_Subjects = "Physics, Chemistry, Biology, Technical Drawing ";
const Social_Science_Subjects = "Accounting, Commerce, Marketing, Geography";
const Arts_Subjects = "Government, Economics, Literature, History";
const General_Subjects = "English, Mathematics";

let classGroup = "Arts";

if (typeof classGroup !== "string") {
    console.log("Error: class group must either be Science, Arts or Social Science.");
  } 
else if (classGroup.toUpperCase() === "SCIENCE")  {
  console.log(`These are the courses you will be offering: ${Science_Subjects}, ${General_Subjects}.`);
}
else if (classGroup.toUpperCase() === "SOCIAL SCIENCE") {
  console.log(`These are the courses you will be offering: ${Social_Science_Subjects}, ${General_Subjects}.`);
}
else if (classGroup.toUpperCase() === "ARTS") {
  console.log(`These are the courses you will be offering: ${Arts_Subjects}, ${General_Subjects}.`);
}
 else {
  console.log(`Choose a valid class group. You will be offering these general courses: ${General_Subjects}.`);
}



//nearest number of power 2
function findNearestPowerOf2(num) {
  let pwr = 1;
  let firstNumber= 2;
  let secondNumber;
  while (firstNumber <= num) {
    secondNumber = firstNumber;
    firstNumber *= 2;
    console.log(firstNumber, secondNumber)
  }
  if (secondNumber-num < firstNumber - num) {
    pwr = secondNumber;
  } else {
    pwr = firstNumber;
  }
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
}

findNearestPowerOf2(40)
