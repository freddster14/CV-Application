import {useState} from 'react'
import email from '../assets/icons8-email.png'
import phone from '../assets/icons8-phone.png'
import address from '../assets/icons8-address.png'
import link from '../assets/icons8-link.png'
import '../styles/General.css'

function General({
    name,
    handleNameChange,
    position,
    handlePositionChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    address,
    handleAddressChange,
    link,
    handleLinkChange
}) {

    const fields = [
        {label: 'Name', value: name , handleChange: handleNameChange, type:'text'},
        {label: 'Position', value: position , handleChange: handlePositionChange, type:'text'},
        {label: 'Email', value: email , handleChange: handleEmailChange, type:'email'},
        {label: 'Phone', value: phone , handleChange: handlePhoneChange, type:'tel'},
        {label: 'Address', value: address , handleChange: handleAddressChange, type:'text'},
        {label: 'Link', value: link , handleChange: handleLinkChange, type:'text'},
    ];
    let index = 0;

    return (
        <div className='general'>
            {fields.map(({label, value, handleChange, type}) => {
                index++

                if(index === 3) {
                    fields.shift();
                    fields.shift();
                    return (
                        <div className='general-info-box' key="general-info-box">
                            {fields.map(({label, value, handleChange, type}) => (
                                <Input
                                key={label}
                                name={label.toLocaleLowerCase()}
                                value={value}
                                handleChange={handleChange}
                                type={type}
                                index={index++}
                                />
                            ))}
                        </div>    
                    );
                    
                } else if (index < 3){
                    return (
                        <Input
                        key={label}
                        name={label.toLocaleLowerCase()}
                        value={value}
                        handleChange={handleChange}
                        type={type}
                        index={index}
                        />
                    )
                }
                
            })}
            
        </div>
 )
}

function Input({name, value, handleChange, type, index}) {
    const [inputWidth, setInputWidth] = useState(value.length + 1);
    const array = [email, phone, address, link];

    
    const handleInput = (e) => {
        handleChange(e.target.value)
        setInputWidth(e.target.value.length + 1)
    };

    if(index > 2) {
        return (
            <div className={name}>
            <img src={array[index - 3]} alt={name}/>
            <input  
            className={name} 
            type={type} 
            value={value}
            style={{width: inputWidth + 'ch'}}
            onInput={handleInput}
            />
            </div>
        
        )
    }
    return (
        <>
            <input  
            className={name} 
            type={type} 
            value={value}
            style={{width: inputWidth + 'ch'}}
            onChange={handleInput}
            />
        </>

    )
}


export default General