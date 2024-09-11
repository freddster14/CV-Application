import { useState } from 'react'
import General from './General'
import Education from './Education'
import envelope from '../assets/icons8-email.png'
import cellPhone from '../assets/icons8-phone.png'
import location from '../assets/icons8-address.png'
import chainLink from '../assets/icons8-link.png'
import '../styles/App.css'

function App() {
  const [name, setName] = useState("John Doe");
  const [position , setPosition] = useState("Software Developer")
  const [email, setEmail] = useState("JohnDoe123@gmail.com");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [address, setAddress] = useState("Houston, TX");
  const [link, setLink] = useState("google.com");
  const [school, setSchool] = useState("Harvard");
  const [major, setMajor] = useState("Computer Science");
  const [graduationDate, setGraduationDate] = useState("May, 2026");
  const [degree, setDegree] = useState(undefined)

  return (
    <>
      <General
      name={name} 
      handleNameChange={setName}
      position={position}
      handlePositionChange={setPosition}
      email={email} 
      handleEmailChange={setEmail}
      phone={phone}
      handlePhoneChange={setPhone}
      address={address}
      handleAddressChange={setAddress}
      link={link}
      handleLinkChange={setLink}
      />
      <Education
      degree={degree}
      handleDegreeChange={setDegree}
      major={major}
      handleMajorChange={setMajor}
      school={school}
      handleSchoolChange={setSchool}
      graduation={graduationDate}
      handleGraduationChange={setGraduationDate}
      />
    
    </>
  )
}

export default App
