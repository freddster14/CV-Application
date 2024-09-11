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
    ];

    const fields = [
        {label: 'Major', value: major, handleChange: handleMajorChange},
        {label: 'School', value: school, handleChange: handleSchoolChange},
        {label: 'Graduation', value: graduation, handleChange: handleGraduationChange},
    ]

    return (
        <div className='education-container'>
            <div className='education-header'>
                <h1>Education</h1>
                <button onClick={EditEducation}>Remove Education</button>
            </div>
            <div className='education-form'>
                <select className='degree-select' value={degree} onChange={(e) => handleDegreeChange(e.target.value)}>
                    <option >Choose A Degree</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option} -</option>
                    ))}
                </select>
                {fields.map(({label, value, handleChange}) => (
                    <Input
                    key={label}
                    name={label}
                    value={value}
                    handleChange={handleChange}
                    />
                ))}
                
            </div>
               
        </div>
    )
}


function EditEducation() {

}

function Input({name, value, handleChange})  {
    const [inputWidth, setInputWidth] = useState(value.length + 1);
    const handleInput = (e, handleChange) => {
        handleChange(e.target.value);
        setInputWidth(e.target.value.length)
    };

 

    return (
        <input 
            type="text" 
            className={name.toLowerCase()}
            value={value}
            style={{width: inputWidth + "ch"}}
            onChange={(e) => handleInput(e, handleChange)}
        />
    )
}

export default Education