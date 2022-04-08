import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../style/components/addCategoryStyle.css';

export const AddCategory = ({ categories, setCategories, setGifs }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ) {

            const exist = categories.find( cat => cat === inputValue )

            if( !exist ) {

                setCategories( actState => [ inputValue, ...actState ]);
            }
            
            setGifs( [ inputValue ] );

            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit } className="input-group grid" >
            <input
                type='text'
                placeholder='Gif of...'
                value={ inputValue }
                onChange={ handleInputChange }
                className="form-control"
            />
            <button type='submit' className='btn search-btn'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16" 
                >
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                </svg>
                </button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
