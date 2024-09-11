import {useState} from 'react';
import '../styles/Education.css'


function Education ({
    school,
    handleSchoolChange,
    major,
    handleMajorChange,
    graduation,
    handleGraduationChange,
    degree,
    handleDegreeChange
}) 
{

    const options = [
        "High School Diploma",
        "Associate",
        "Bachelor's",
        "Master's",
        "Doctoral",
    ]

    return (
        <div className='education-container'>
            <div className='education-header'>
                <h1>Experience</h1>
                <button onClick={EditEducation}></button>
            </div>
            <select className='degree-select' onChange={(e) => handleDegreeChange(e.target.value)}>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
            </select>
        </div>
    )
}


function EditEducation() {

}

export default Education