import { useState } from 'react'
import General from './General'
import '../styles/App.css'

function App() {
  const [name, setName] = useState("John Doe");
  const [position , setPosition] = useState("Software Developer")
  const [email, setEmail] = useState("JohnDoe123@gmail.com");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [address, setAddress] = useState("Houston, TX");
  const [link, setLink] = useState("google.com")


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

      <div className='cv'>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <div>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
          <a href={`https://www.${link}`} target="_blank">{link}</a>
        </div>
      </div>
    </>
  )
}

export default App
