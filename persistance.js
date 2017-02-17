const init = () => console.log("Starting persistance")

const createCourse = function(course){
    // insergt course into db
    console.log("course created successfully")
    return 1234
}

const getStudents = function(courseID) {
    //get students of courseID
    console.log("getting students ...")
    console.log("got courseID ",courseID )
    return [1,2,3]
    
}

const addStudents = function(courseID, student){
    // add student to db
    console.log("successfully added student")
    return true
    
}

const getStudentPurchases = function(studentID){
    //get all purchases for studentID
    return [1,2,3,4]
}

const addStudentPurchase = function(studentID, purchase){
    // add purchase to student with studentID
}

module.exports = {
    "init" : init,
    "createCourse" : createCourse,
    "getStudents" : getStudents,
    "addStudents" : addStudents,
    "getStudentPurchases" : getStudentPurchases,
    "addStudentPurchase" :addStudentPurchase
}
