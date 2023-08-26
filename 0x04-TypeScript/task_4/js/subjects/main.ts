export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

export const cTeacher: Teacher = {
experienceTeachingC = 10
};

console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher(cTeacher));

console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher(cTeacher));

console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher(cTeacher));
