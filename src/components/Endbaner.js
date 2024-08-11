import React from 'react'
import downsvg from "../utils/down.svg"
import mbbanner from "../utils/endbannerMb.svg"

const Endbaner = () => {
  return (
    <div>
      <img className="pcbanner" src={downsvg} alt="down"></img>
      <img className="mbbanner" src={mbbanner} alt="mb" />
    </div>
  )
}

export default Endbaner