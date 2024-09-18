import { useState } from 'react'
import General from './General'
import Education from './Education'
import Experience from './Experience'
import html2pdf from 'html2pdf.js'
import '../styles/App.css'

function App() {
  const [name, setName] = useState("John Doe");
  const [position , setPosition] = useState("Software Developer")
  const [email, setEmail] = useState("JohnDoe123@gmail.com");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [address, setAddress] = useState("Houston, TX");
  const [link, setLink] = useState("google.com");
  

  return (
    <>
      <button className='pdf-button' onClick={printPdf}>PDF</button>
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
      <Experience/>
      <Education/>
    </>
  )
}


function printPdf() {
  
  let page = document.getElementById('root');
  let buttons = document.querySelectorAll('button');
  let inputs = document.querySelectorAll('input');
  let selects = document.querySelectorAll('select');
  let link = document.createElement('a')
  let name = document.querySelector(".name").value

  const options = {
    filename:  name + ' Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, windowWidth: '1000px' },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    enableLinks: true,
    pagebreak: {mode: 'avoid-all'}
  };

  removeInputs(selects, link, buttons, page, inputs)
  
  //Download PDF
  html2pdf().set(options).from(page).save();

  setTimeout(() => {  
    addInputs(selects, link, buttons, page, inputs)
  }, 100)
}


function removeInputs(selects, link, buttons, page, inputs) {
  selects.forEach(select => {
    let selectP = document.createElement('p');
    selectP.textContent = select.value
    selectP.classList.add(select.className)
    select.parentNode.replaceChild(selectP, select)

  })
 
  inputs.forEach(input => {
    let newP = document.createElement('p')
    newP.textContent = input.value
    newP.classList.add(input.className)
    if(input.className === "link") {
      link.textContent =   input.value
      link.classList.add(input.className)
      link.href = "https://www." + input.value
      input.parentNode.replaceChild(link, input)
    } else {
      input.parentNode.replaceChild(newP, input)
    }
  })
  buttons.forEach(button => {
    button.style.opacity = "0%"
  })
  page.style.border = "none"
}

function addInputs(selects, link, buttons, page, inputs) {

  link.parentNode.replaceChild(inputs[5], link)
  let selectP = document.getElementsByClassName('degree-select');
  selectP.forEach((select, index) => {
    select.parentNode.replaceChild(selects[index], select)
  });
  let allP = document.querySelectorAll("p");
  allP.forEach((p, index) => {
      if(index >= 5) index++;
      p.parentNode.replaceChild(inputs[index], p)
    
  })
  buttons.forEach(button => {
    button.style.opacity = "100%"
  })
  page.style.border = "1px solid black"
}



export default App
