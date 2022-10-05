const info =[
    {
        color:"#192A67",
        text:"Living Lab" 
    },{
        color:"#922B43", 
        text:"Centro de lenguas extranjeras"
    },{
        color:"#F19500",text:"EICEA"
    },{
        color:"#818990",
        text:"Comunicación"
    },{
        color:"#734390",
        text:"Psicología"
    },
    {
        color:"white", text:"Laboratorios", center:"true"
    },{
        color:"#C7211D",
        text:"Consultorio Jurídico"
    },{
        color:"#FFD71C",
        text:"Medicina"
    },{
        color:"#936D47",
        text:"Ingeniería"
    },{
        color:"#C6C6C6",
        text:"Enfermería Fisioterapia"
    },{
        color:"#D3AE00",
        text:"Medicina Enfermería Fisioterapia"
    }
]
const dictionary={
    "Living Lab":"#192A67",
    "Centro de lenguas extranjeras":"#922B43",
    "EICEA":"#F19500",
    "Comunicación":"#818990",
    "Psicología":"#734390",
    "Laboratorios":"white",
    "Consultorio Jurídico":"#C7211D",
    "Medicina":"#FFD71C",
    "Ingeniería":"#936D47",
    "Enfermería Fisioterapia":"#C6C6C6",
    "Medicina Enfermería Fisioterapia":"#D3AE00"

}

function getFaculty(name){
    return dictionary[name]
}
export default getFaculty