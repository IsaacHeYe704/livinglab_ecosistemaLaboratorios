import React from 'react'
import {useParams } from 'react-router-dom';

const LabDetail = () => {
    let { labName } = useParams();
  return (
    <div>{labName}</div>
  )
}

export default LabDetail