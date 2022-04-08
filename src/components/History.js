import React from 'react';

import '../style/components/HistoryStyle.css';


const History = ({ history, gifs, modal }) => {

    const handleResearch = ( search ) => {
        gifs([ search ]);
        modal( false );
    }

    return (
        <ul className='ulContainer' >
            {
                history.map( search =>
                    <li onClick={ () => handleResearch(search) } key={ search } > { search } </li> 
                )
            }
        </ul>
    )
}

export default History