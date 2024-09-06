import {useState} from 'react'
import '../styles/General.css'

function General({
    name,
    handleNameChange,
    position,
    handlePositionChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    address,
    handleAddressChange,
    link,
    handleLinkChange
}) {
 return (
    <div className='general'>
        <Name value={name} handleNameChange={handleNameChange}></Name>
        <Position value={position} handlePositionChange={handlePositionChange}></Position>
        <Email value={email} handleEmailChange={handleEmailChange}></Email>
        <Phone value={phone} handlePhoneChange={handlePhoneChange}></Phone>
        <Address value={address} handleAddressChange={handleAddressChange}></Address>
        <Link value={link} handleLinkChange={handleLinkChange}></Link>
    </div>
 )
}

function Name({value, handleNameChange}) {
    return (
        <>
        <label htmlFor="name">Full Name: </label>
        <input  
        id="name" 
        type="text" 
        value={value} 
        onChange={(e) => handleNameChange(e.target.value)}/>
        </>
    )
}

function Position({value, handlePositionChange}) {
    return (
        <>
        <label htmlFor="">Position: </label>
        <input 
        type="text"
        id='position'
        value={value}
        onChange = {((e) => handlePositionChange(e.target.value))} 
        />
        </>
    )
}

function Email({value, handleEmailChange}) {
    return (
        <>
        <label htmlFor="email">E-mail: </label>
        <input  
        id="name" 
        type="email" 
        value={value} 
        onChange={(e) => handleEmailChange(e.target.value)}/>
        </>
    )
}

function Phone({value, handlePhoneChange}) {
    return (
        <>
        <label htmlFor="name">Phone Number: </label>
        <input  
        id="name" 
        type="tel" 
        value={value} 
        onChange={(e) => handlePhoneChange(e.target.value)}/>
        </>
    )
}
function Address({value, handleAddressChange}) {
    return(
        <>
        <label htmlFor="address">Address: </label>
        <input 
        type="text"
        id='address'
        value={value}
        onChange = {((e) => handleAddressChange(e.target.value))} 
        />
        </>
    )
}
function Link({value, handleLinkChange}) {
    return(
        <>
        <label htmlFor="link">Link: </label>
        <input 
        type="text"
        id='link'
        value={value}
        onChange = {((e) => handleLinkChange(e.target.value))} 
        />
        </>
    )
}

export default General