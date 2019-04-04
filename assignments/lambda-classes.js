// CODE here for your Lambda Classes
// #### Person
//
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
//
// #### Instructor
//
// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
//
// #### Student
//
// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
//
// #### Project Manager
//
// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class Person {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(inAttributes){
    super(inAttributes);
    this.specialty = inAttributes.specialty;
    this.favLanguage = inAttributes.favLanguage;
    this.catchPhrase = inAttributes.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject){
    return `${student.name} received a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttributes){
    super(studentAttributes)
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
      return this.favSubjects;
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on ${subject}`
    }

}

class ProjectManager extends Instructor {
  constructor(projAttributes){
    super(projAttributes);
    this.gradClassName = projAttributes.gradClassName;
    this.favInstructor = projAttributes.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`;
  }
  debugsCode(object1, object2, subject){
    return `${kia.name} debugs ${angelo.name}'s code on ${subject}`;
  }
}

const jerry = new Instructor({
  name: 'Jerry',
  age: 36,
  location: 'Raleigh',
  gender: 'M',
  specialty: 'Javascript',
  favLanguage: 'React',
  catchPhrase: 'Takes one to know one.'
});

const amy = new Instructor({
  name: 'Amy',
  age: 43,
  location: 'San Francisco',
  gender: 'F',
  specialty: 'CSS',
  favLanguage: 'C+',
  catchPhrase: 'Relax.'
});

const randy = new Instructor({
  name: 'Randy',
  age: 23,
  location: 'Michigan',
  gender: 'M',
  specialty: 'HTML',
  favLanguage: 'Python',
  catchPhrase: 'Wherever you go, there you are.'
});

const kia = new Student({
  name: 'Kia',
  age: 18,
  location: 'Florida',
  gender: 'F',
  previousBackground: 'I was a Lifegaurd in High School and a member of the swim team.',
  className: 'Web19',
  favSubjects: ['HTML', 'CSS', 'Python', 'Ruby']
});

const angelo = new Student({
  name: 'Angelo',
  age: 25,
  location: 'Kentucky',
  gender: 'M',
  previousBackground: 'I played football in college.',
  className: 'Web16',
  favSubjects: ['Functions', 'Arrays', 'Preprocessors']
});

const nikki = new Student({
  name: 'Nikki',
  age: 31,
  location: 'New Hampshire',
  gender: 'F',
  previousBackground: 'I have been a receptionist since high school.',
  className: 'Web27',
  favSubjects: ['Syntax', 'Array methods', 'Prototypes']
});

const mashonda = new ProjectManager({
  name: 'Mashonda',
  age: 28,
  location: 'Nashville',
  gender: 'F',
  gradClassName: 'Web3',
  favInstructor: 'Demarcus'
});

const anita = new ProjectManager({
  name: 'Anita',
  age: 45,
  location: 'Wisconsin',
  gender: 'F',
  gradClassName: 'Web4',
  favInstructor: 'Josh'
});

const danny = new ProjectManager({
  name: 'Danny',
  age: 60,
  location: 'Colorado',
  gender: 'M',
  gradClassName: 'Web5',
  favInstructor: 'Gina'
});

console.log(randy.demo('Python'));
console.log(amy.grade(nikki, 'Arrays'));
console.log(kia.listsSubjects());
console.log(angelo.PRAssignment('Ruby'));
console.log(nikki.sprintChallenge('Constructors'));
console.log(anita.standUp('Career_Presentations'));
console.log(danny.debugsCode(randy, angelo, 'CSS'));
