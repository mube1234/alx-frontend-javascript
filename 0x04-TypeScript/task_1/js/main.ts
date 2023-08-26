interface Teacher{
	readonly firstname: string,
	readonly lastname: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[key: string]: any
	}

	interface Director extends Teacher{
	numberOfReports: number;
	}

	interface printTeacherFunction{
	(firstName: string, lastName: string): string;
	}

	const printTeacher: printTeacherFunction = (firstName, lastName) => {
	const firstLetter = firstName.charAt(0).toUpperCase();
	const fullName = `${firstLetter}. ${lastName}`;

	return fullName;
	}

	interface Student{
	workOnHomework(): string;
	displayName(): string;
	}

	class StudentClass implements Student{
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string){
	this.firstName = firstName;
	this.lastName = lastName;
	}

	workOnHomework(): string{
	return 'Currently working';
	}

	displayName(): string{
	return this.firstName;
	}
	}
