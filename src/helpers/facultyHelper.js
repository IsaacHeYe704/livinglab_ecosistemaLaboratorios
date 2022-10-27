
function getFaculty(name,faculties){
    var result = faculties.find(faculty =>faculty.nombre === name);
    return result
}
export default getFaculty