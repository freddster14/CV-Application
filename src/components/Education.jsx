import {Fragment, useState} from 'react';
import '../styles/Education.css'


function Education () {
    const [components, setComponents] = useState([
        <MakeEducation
        defaultMajor="Computer Science"
        defaultSchool="Rice University"
        defaultGraduation="2020 - 2024"
        />
    ])
    
    const addInputs = (e) => {
        setComponents([...components, 
            <MakeEducation
            defaultMajor="Computer Science"
            defaultSchool="Rice University"
            defaultGraduation="2020 - 2024"
            />])
        
    }

    return (
        <>
            <div className='bottom-divider'></div>                
            <div className='header'>
                <h1>Education</h1>
                <button className='header-button' onClick={addInputs}>+</button>
            </div>
            
            {components.map((components, index) => (
                <Fragment key={index}>
                {components}
                </Fragment>
            ))}     
        </>
    )
}




function MakeEducation({
    defaultMajor,
    defaultSchool,
    defaultGraduation,
})

{
    const [degree, setDegree] = useState(undefined);
    const [school, setSchool] = useState(defaultSchool);
    const [major, setMajor] = useState(defaultMajor);
    const [graduationDate, setGraduationDate] = useState(defaultGraduation); 
    const options = [
        "Associate -",
        "Bachelor's -",
        "Master's -",
        "Doctoral -",
    ];
    const fields = [
        {label: 'School', value: school, handleChange: setSchool},
        {label: 'Graduation', value: graduationDate, handleChange: setGraduationDate},
    ]
    return (
    <div className='forms'>
        <div className="degree-major">
            <select className='degree-select' value={degree} onChange={(e) => setDegree(e.target.value)}>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <Input
            key='Major'
            name='Major'
            value={major}
            handleChange={setMajor}
            />
        </div>
        {fields.map(({label, value, handleChange}) => (
            <Input
            key={label}
            name={label}
            value={value}
            handleChange={handleChange}
            />
        ))}
        <button className='delete-form' onClick={deleteForm}>Delete</button>
    </div>
    )
   
}

function deleteForm(e) {
    e.target.parentNode.remove()
}

function Input({name, value, handleChange})  {
    const [inputWidth, setInputWidth] = useState(value.length);
    const handleInput = (e, handleChange) => {
        handleChange(e.target.value);
        setInputWidth(  name==="Major" ? e.target.value.length + 1 : e.target.value.length)
    };

    return (
        <>
            <input 
                type="text" 
                className={name.toLowerCase()}
                value={value}
                style={{width: inputWidth + "ch"}}
                onChange={(e) => handleInput(e, handleChange)}
            />
            {name === "School" && <div className='education-divider'></div>}
        </>
        
    )
}

export default Education