import React from 'react'
import Bola from '../../components/Bola/Bola'
import "./Ecosistems.css"

const Ecosistems = () => {
  return (
    <div className='Ecosistems'>
        <div className="row one">
            {info.slice(0,2).map(({color,text},id)=><Bola color={color} id={"one"+id}  text={text} />)}
        </div>
        <div className="row two">
            {info.slice(2,4).map(({color,text},id)=><Bola color={color} id={"two"+id}  text={text} />)}
        </div>
        <div  className="row center">
        {info.slice(4,7).map(({color,text,center},id)=><Bola color={color} text={text} id={"center"+id}  center={center}/>)}
        </div>
        <div className="row three">
            {info.slice(7,9).map(({color,text},id)=><Bola color={color} id={"three"+id} text={text} />)}
        </div>
        <div className="row four">
            {info.slice(9,11).map(({color,text},id)=><Bola color={color} id={"four"+id} text={text} />)}
        </div>
    </div>
  )
}
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
        text:"Psciología"
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
export default Ecosistems