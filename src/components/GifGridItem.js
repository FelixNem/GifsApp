import React from 'react';

import '../style/components/GifGridItem.css';

export const GifGridItem = ({ id, title, url }) => {

    return (
    <div className='card animate__animated animate__bounce' >
        <img src={ url } alt={ title } />
        <p> {title} </p>
    </div>
    )
}
