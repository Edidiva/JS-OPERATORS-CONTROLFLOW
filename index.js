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