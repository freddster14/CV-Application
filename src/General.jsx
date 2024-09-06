import {useState} from 'react'

function General() {
 return (
    <>
    <Name></Name>
    </>
 )
}

function Name() {
    const [value, setValue] = useState('')
    return (
        <>
        <label htmlFor="name">Full Name: </label>
        <input  id="name" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )
}

function Email() {

}

function Phone() {

}

export default General