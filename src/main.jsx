import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import html2pdf from 'html2pdf.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <button className='pdf-button' onClick={printPdf}>PDF</button>
  </StrictMode>,
)


function printPdf() {
  
  let page = document.getElementById('root');
  let buttons = document.querySelectorAll('button');
  let inputs = document.querySelectorAll('input');
  let select = document.querySelector('select');
  let selectP = document.createElement('p');
  let name = document.querySelector(".name").value

  const options = {
    filename:  name + ' Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  selectP.textContent = select.value
  selectP.classList.add(select.className)
  select.parentNode.replaceChild(selectP, select)
  inputs.forEach(input => {
    let newP = document.createElement('p')
    newP.textContent = input.value
    newP.classList.add(input.className)
    input.parentNode.replaceChild(newP, input)
  })

  buttons.forEach(button => {
    button.style.opacity = "0%"
  })
  page.style.border = "none"

  //Download PDF
  html2pdf().set(options).from(page).save();
  setTimeout(() => {
     //Restore select before selecting all 'p'
  selectP.parentNode.replaceChild(select, selectP)

  let allP = document.querySelectorAll("p")
  allP.forEach((p, index) => {
    p.parentNode.replaceChild(inputs[index], p)
  })

  buttons.forEach(button => {
    button.style.opacity = "100%"
  })
  page.style.border = "1px solid black"
  }, 100)
 
  
}


