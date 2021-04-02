import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
        console.log('handleInputChange is called');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('HandldSubmit is called');
        
        if ( inputValue.trim().length > 2 ) {
            console.log('setCategories is called');
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <p> {inputValue} </p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
