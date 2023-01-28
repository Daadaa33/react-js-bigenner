import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub, BsTwitter, BsInstagram} from "react-icons/bs"

function About() {
  return (
    <div>
      {/* left */}
      <div>
        <h1>Daadir Quule</h1>
        <p>lorevjvsjhsdbjdssdjkdjsbnkjsdsjghuifhiughisuhsdhsdhgsdhgk</p>
      </div>
        <div>
          <h1>
           <Link  to="https://github.com/Daadaa33">
            <BsGithub />
           </Link>
          </h1>
        </div>
    </div>
  )
}

export default About