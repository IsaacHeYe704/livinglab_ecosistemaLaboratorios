import React from 'react'
import "./Bola.css"
import Xarrow from "react-xarrows";
const Bola = ({color,text, center,id}) => {
  return (
    <>
    <div  className='Bola' style={{backgroundColor:color,animationDelay:Math.random()*2+"s", top:Math.random()*50+ "px",left:Math.random()*50+ "px"}}>
    <div className="Bola-Content" style={{backgroundColor:color}}>
        <p   style={{fontSize:selectFontSize(text,center), color: textColor(center)}}>{text}</p>
        </div>
        <span id={id} style={{position:"absolute",width:"50px",height:"50px"}} id={id}/>
    </div>
    <Xarrow
                start={id} //can be react ref
                end="center1" //or an id
                color={'gray'}
                headSize={0}
                curveness={0}
                strokeWidth={15}
                animateDrawing={true}
                dashness={Math.random()>0.6?true:false}
            />
    </>
    
  )
}
const selectFontSize = (text,center)=>{
    if(center){
        return "22px"
    }
    if(text.length > 10){
        return "15px"
    }
    return "20px"
}
const textColor = (center)=>{
    if(center){
        return "#192A67"
    }
    return "white"
}
export default Bola