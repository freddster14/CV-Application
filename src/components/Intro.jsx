import '../styles/Intro.css'

export default function Intro() {

    function closeModal() {
        document.querySelector('.modal-container').remove()
        document.querySelector('.modal-backdrop').remove()
        document.querySelector('.app-name').style.transform = "translate(-50%, 10%) scale(1)"
    }
    setTimeout(() => {
        let appName = document.querySelector('.app-name')
        let width = window.innerWidth
        if(width < 751) {
            appName.style.transform = "translate(-50%, 440%) scale(2)"
        } else{
            appName.style.transform = "translate(-50%, 340%) scale(1.9)"
        }
    },100)
    return (
        <>  
            <h1 className="app-name">CV Builder</h1>
            <div className='modal-backdrop'></div>
            <div className='modal-container'>
                <h1>Make your own Resume!</h1>
                <p>
                    Start by <span className="span-text">editing</span>
                    the text, <span className="span-text">add</span>or
                    <span className="span-text"> delete</span>
                    the sections with buttons. Enter full link 
                    PDF will automatically organize it. When you're done, press 
                    <span className="span-text"> PDF</span>to download your resume.
                </p>
                <button onClick={closeModal} className='close-modal' aria-label='Close Modal'>&times;</button>
            </div>
        </>
    )
}