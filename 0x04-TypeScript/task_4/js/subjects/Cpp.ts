/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
namespace Subjects{
interface Teacher{
experienceTeachingC?: number;
}
}
class Cpp extends Subject{
getRequirements(): string{
return 'Here is the list of requirements for Cpp';
}

getAvailableTeacher(): string{
if (this.teacher.exexperienceTeachingC === undefined){
return 'No available teacher';
}
else{
return `Available Teacher: ${this.teacher.firstName}`;
}
}
}
