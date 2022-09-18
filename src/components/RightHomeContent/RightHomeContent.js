import React from 'react'
import './RightHomeContent.css'
const RightHomeContent = () => {
  return (
    <div className='RightHomeContent'>
        <div className='RightHomeContent_left'>
            <p className="RightHeader_numberTitle"> 182 </p>
            <p className='RightHeader_numberText'>Espacios de laboratorios</p>
        </div>
        <div className='RightHomeContent_right'>
            <div className='RightHomeContent_right_listContainer'>  
                <div><span className='bullet'/> <p className="RightHeader_numberSubtitle"> 79 </p> </div>
                <div><span className='bullet'/> <p className="RightHeader_numberSubtitle"> 31 </p></div>
                <div><span className='bullet'/> <p className="RightHeader_numberSubtitle"> 35 </p></div>
            </div>
        </div>
        

    </div>
  )
}

export default RightHomeContent