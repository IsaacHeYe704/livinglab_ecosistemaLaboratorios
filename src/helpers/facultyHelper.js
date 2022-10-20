
function getFaculty(name,faculties){
    var result = faculties.find(faculty =>faculty.nombre === name);
    console.log(result)
    return result.color
}
export default getFaculty