const Class = require('./Class');
const Student = require('./Student')

class School {
  constructor() {
    this.classes = {
      // className: Class Object
      //   physics: {} 
    }
  }

  addClass(name, teacher) {
    let newClass = new Class(name, teacher);
    if(this.classes[name]) {
      return false
    }
    this.classes[name] = newClass;
    return newClass;
  }

  enrollStudent(className, student) {
    let currClass = this.classes[className];
    let newStudent = new Student(student.name, student.age, student.city, student.grade);
    if(currClass.isEnrolled(newStudent.name)) {
      
    }
    this.classes[className].enrollStudent(student);
    return student;
  }

  getStudentsByClass(className) {
    return this.classes[className].students;
  }

  getStudentsByClassWithFilter(className, failing = false, city = undefined) {
    let students = this.getStudentsByClass(className);

    if(failing && city) {
      return students.filter(student => student.isFailing() && student.matchCity(city));
    }

    if(!failing && city) {
      return students.filter(student => student.matchCity(city));
    }

    if(failing && !city) {
      return students.filter(student => student.isFailing());
    }
  }
}

module.exports = School;