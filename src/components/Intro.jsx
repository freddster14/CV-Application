import '../styles/Intro.css'

export default function Intro() {

    function closeModal() {
        document.querySelector('.modal-container').remove()
        document.querySelector('.modal-backdrop').remove()  
        document.querySelector('.app-name').style.transform = ""

    }
    setTimeout(() => {
        document.querySelector('.app-name').style.transform = "scale(1.5)";
        
    },100)
    return (
        <>  
            <div className='modal-backdrop'></div>
            <h1 className="app-name">CV Builder</h1>
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