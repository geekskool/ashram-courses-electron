const uuid = require('uuid')
class DB {
    constructor(){
	this.db = {}
    }

    addCourse(course){
	let courseID = uuid.v4()
	course.courseID = courseID
	this.db[courseID] = course
	return courseID
    }

    getCourses(){
	const db = this.db
	let keys = Object.keys(db)
	const courses = keys.map(key => db[key])
	return courses
    }
    
    getCourse(courseID){
	let course = this.db[courseID]
	return course === undefined ? null : course
    }

    addStudent(courseID, student){
		let studentID = uuid.v4()
		student.studentID = studentID
    	let course = this.getCourse(courseID)
    	if (course !== null){
	    course.students[studentID] = student
	    return studentID
    	}
    	return null
    } 

    getStudent(courseID, studentID){
	let course = this.getCourse(courseID)
	if (course !== null){
	    let student = course.students[studentID]
	    return student === undefined ? null : student
	}
	return null
    }

    getStudents(courseID){
	let course = this.getCourse(courseID)
	if (course !== null){
		let students = course.students
		let keys = Object.keys(students)
		const sds = keys.map(key => students[key])
	    return sds
	}
	return null
    }

    getStudentTransactions(courseID, studentID){
	let course = this.getCourse(courseID)
	if (course !== null){
	    let student = course.students[studentID]
		let txns = student["transactions"]
	    let keys = Object.keys(txns)
		const txnn = keys.map(key => txns[key])
	    return txnn
		
	}
	return null	
    }

    addStudentTransaction(courseID, studentID, transaction){
	let txnID = uuid.v4()
	transaction.txnID = txnID
	let student = this.getStudent(courseID, studentID)
	if (student !== null){
	    student.transactions[txnID] = transaction
	    return txnID
	}
	return null	
    }
    
    print(str){
	console.log(str + " " + JSON.stringify(this.db))
    }
}

const init = ()=>new DB()

module.exports = {
    init
    }
