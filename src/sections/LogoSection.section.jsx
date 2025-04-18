import React from 'react'
import { logoIconsList } from '../utils/data'
import LogoIcon from '../components/LogoIcon.component'

const LogoSection = () => {
  return (
    <div className="md:my-5 my-2 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection