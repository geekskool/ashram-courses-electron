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

module.exports = {
    newCourse,
    newStudent
}
