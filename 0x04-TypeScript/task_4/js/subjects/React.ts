/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
namespace Subjects{
interface Teacher{
experienceTeachingReact?: number;
}
}
class React extends Subject{
getRequirements(): string{
return 'Here is the list of requirements for React';
}

getAvailableTeacher(): string{
if (this.teacher.exexperienceTeachingReact === undefined){
return 'No available teacher';
}
else{
return `Available Teacher: ${this.teacher.firstName}`;
}
}
}
