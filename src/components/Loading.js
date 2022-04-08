import React from 'react';
import {Bars} from 'react-loader-spinner';

import '../style/components/Loading.css'

const Loading = () => {
    return (
        <div className='centarLoader' >
            <Bars
                color="rgb(0,153,255)"
                height={150}
                width={500}
                timeout={3000}
            />
        </div>
    )
}

export default Loading
