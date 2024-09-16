import {useState, Fragment} from 'react'
import '../styles/Experience.css'

function Experience () {
    const [components, setComponents] = useState([
        <MakeExperience
        defaultCompany="Netflix"
        defaultTitle="Product Engineer"
        defaultDate="2023 - Current"
        defaultRole="Full-Stack & Mobile Engineer"
        defaultTasks={
            [
                "Create React UI components for mobile ",
                "Manage databases with Odoo",
                "Troubleshoot and debug"
            ]
        }
        />
    ])
    
    const addInputs = (e) => {
        setComponents([...components, 
            <MakeExperience
            defaultCompany="Netflix"
            defaultTitle="Product Engineer"
            defaultDate="2023 - Current"
            defaultRole="Full-Stack & Mobile Engineer"
            defaultTasks={
                [
                   "Create React UI components for mobile ",
                    "Manage databases with Odoo",
                    "Troubleshoot and debug"
                ]
            }
            />])
        
    }

    return (
        <div className='experience-container'>
            <div className='header'>
                <h1>Experience</h1>
                <button className='header-button' onClick={addInputs}>+</button>
            </div>
            
            {components.map((components, index) => (
                <Fragment key={index}>
                {components}
                </Fragment>
            ))}
            <div className='divider'></div>                
            
               
        </div>
    )
}




function MakeExperience({
    defaultCompany,
    defaultTitle,
    defaultDate,
    defaultRole,
    defaultTasks,
})

{
    const [role, setRole] = useState(defaultRole);
    const [title, setTitle] = useState(defaultTitle);
    const [company, setCompany] = useState(defaultCompany);
    const [date, setDate] = useState(defaultDate); 
    const [tasks, setTask] = useState(defaultTasks)
  
    const fields = [
        {label: 'Title', value: title, handleChange: setTitle},
        {label: 'Role', value: role, handleChange: setRole},
        {label: 'Company', value: company, handleChange: setCompany},
        {label: 'Date', value: date, handleChange: setDate},
    ]

    function handleTasks(e, value) {
        let index = tasks.indexOf(value)
        let newItem = [...tasks]
        newItem[index] = e
        setTask(newItem)
    }
    return (
    <div className='forms'>
        
        {fields.map(({label, value, handleChange}) => (
            <Input
            key={label}
            name={label}
            value={value}
            handleChange={handleChange}
            />
        ))}
        <ul className='job-tasks'>
            {tasks.map((task, index) => (
                <Fragment key={index}>
                    <div className=''></div>
                    <Input 
                    name="task"
                    value={task}
                    handleChange={handleTasks}
                    />
                </Fragment>
            ))}
        </ul>
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
        name === "task" ? handleChange(e.target.value, value) : handleChange(e.target.value);
        setInputWidth(name ==="Title" ? e.target.value.length + 1 : e.target.value.length)
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
            {name === "Title" && <div className='experience-divider'></div>}
        </>
        
    )
}

export default Experience