const newCourse = () => ({
    name : "",
    duration : 0,
    students : {},
    startDate : "",
    endDate : ""
})

const newStudent = () => ({
    name : "",
    new : true,
    deposit : 0,
    transactions : [],
    roomNo : ""
})

const newTransaction = () => ({
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
