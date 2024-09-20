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
  const [link, setLink] = useState("https://www.google.com/");
  

  return (
    <div className='app'>
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
    </div>
  )
}


function printPdf() {
  
  let app = document.querySelector('.app');
  let buttons = document.querySelectorAll('button');
  let inputs = document.querySelectorAll('input');
  let selects = document.querySelectorAll('select');
  let link = document.createElement('a')
  let name = document.querySelector(".name").value
  const options = {
    margin: [0.3, 0.2],
    filename:  name + ' Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, windowWidth: '1000px' },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    enableLinks: true,
    pagebreak: {mode: 'avoid-all'}
  };

  app.style.fontSize = '0.9em'
  removeInputs(selects, link, buttons, inputs)
  
  //Download PDF
  html2pdf().set(options).from(app).save();

  setTimeout(() => {  
    addInputs(selects, link, buttons, inputs);

  }, 100)
}


function removeInputs(selects, link, buttons, inputs) {
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
      link.href = input.value
      //Short link text
      let e = input.value;
      (e.indexOf('w') === 8) ? e = e.slice(12) : e = e.slice(8)
      let cut = e.indexOf("/")
      link.textContent = e.slice(0 , cut--)
      link.classList.add(input.className)
      input.parentNode.replaceChild(link, input)
    } else {
      input.parentNode.replaceChild(newP, input)
    }
  })
  buttons.forEach(button => {
    button.style.opacity = "0%"
  })
}

function addInputs(selects, link, buttons, inputs) {
  let count = 0;
  link.parentNode.replaceChild(inputs[5], link)
  let allP = document.querySelectorAll("p");
  allP.forEach((p, index) => {
    if(inputs[index - count] === undefined) {
      console.log(inputs[index - count])
      console.log("ran")
      return
    }
    if(index >= 5) index++ 
    if(p.className === 'degree-select') {
      p.parentNode.replaceChild(selects[count], p)
      count += 1
    } else {
      //console.log(inputs[index-count], p, index, inputs.length)
      p.parentNode.replaceChild(inputs[index - count], p)
    }
  })
  buttons.forEach(button => {
    button.style.opacity = "100%"
  })
}



export default App
