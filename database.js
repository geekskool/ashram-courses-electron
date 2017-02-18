class DB {
    constructor(){
	this.db = {}
    }

    addCourse(course){
	let {name} = course
	this.db[name] = course
	return name
    }

    getCourse(courseID){
	let course = this.db[courseID]
	return course === undefined ? null : course
    }

    addStudent(courseID, student){
    	let course = this.getCourse(courseID)
    	if (course !== null){
    	    let {name} = student
	    course.students[name] = student
	    return name
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
	    return course.students
	}
	return null
    }

    getStudentTransactions(courseID, studentID){
	let course = this.getCourse(courseID)
	if (course !== null){
	    let student = course.students[studentID]
	    return student === undefined ? null : student["transactions"]
	}
	return null	
    }

    addStudentTransaction(courseID, studentID, transaction){
	let student = this.getStudent(courseID, studentID)
	if (student !== null){
	    student.transactions.push(transaction)
	    return true
	}
	return false	
    }
    
    print(str){
	console.log(str + " " + JSON.stringify(this.db))
    }
}

const init = ()=>new DB()

module.exports = {
    init
    }