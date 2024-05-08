import React from 'react'
import Tilt from "react-parallax-tilt";

function TiltImage({children}) {
  return (
    <Tilt tiltMaxAngleX={'45'} tiltMaxAngleY={'45'}>{children}</Tilt>
  )
}

export default TiltImage