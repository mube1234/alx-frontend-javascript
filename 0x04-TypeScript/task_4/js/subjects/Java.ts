/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
namespace Subjects{
interface Teacher{
experienceTeachingJava?: number;
}
}
class Java extends Subject{
getRequirements(): string{
return 'Here is the list of requirements for Java';
}

getAvailableTeacher(): string{
if (this.teacher.exexperienceTeachingJava === undefined){
return 'No available teacher';
}
else{
return `Available Teacher: ${this.teacher.firstName}`;
}
}
}
