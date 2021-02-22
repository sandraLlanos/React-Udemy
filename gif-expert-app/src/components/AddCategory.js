import React, { useState } from 'react'

const AddCategory = () => {
    const [inputValue, setInputValue] = useState('hello word!');
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submited');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
}

export default AddCategory
