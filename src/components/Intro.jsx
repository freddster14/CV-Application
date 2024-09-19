import '../styles/Intro.css'

export default function Intro() {

    function closeModal() {
        document.querySelector('.modal-container').remove()
        document.querySelector('.modal-backdrop').remove()
        document.querySelector('.app-name').style.transform = "translate(-50%, 0%) scale(1)"
    }
    setTimeout(() => {
        let appName = document.querySelector('.app-name')
        let width = window.innerWidth
        if(width < 501) {
            appName.style.transform = "translate(-50%, 655%) scale(1.8)"
        } else if(width < 751) {
            appName.style.transform = "translate(-50%, 520%) scale(2)"
        } else{
            appName.style.transform = "translate(-50%, 320%) scale(2)"
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
                    the sections with buttons. Enter simple link as shown
                    in the example. When you're done, press 
                    <span className="span-text"> PDF</span>to download your resume.
                </p>
                <button onClick={closeModal} className='close-modal' aria-label='Close Modal'>&times;</button>
            </div>
        </>
    )
}