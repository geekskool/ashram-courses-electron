const newCourse = () => ({
    courseID: "",
    name : "",
    duration : 0,
    students : {},
    startDate : "",
    endDate : "",
    description : ""
})

const newStudent = () => ({
    studentID: "",
    name : "",
    new : true,
    deposit : 0,
    transactions : {},
    roomNo : ""
})

const newTransaction = () => ({
    txnID: "",
    type : "",
    name : "",
    count : 1,
    rate : 0,
    total : 0,
    date : ""
})
module.exports = {
    newCourse,
    newStudent,
    newTransaction
}
