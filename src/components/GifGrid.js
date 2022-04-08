import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import Loading from './Loading';

import '../style/components/GifGrid.css'
import NotResults from './NotResults';

export const GifGrid = ({ category, amount }) => {
    const { data: images,loading } =useFetchGifs( category, amount );

    return (
        <>
            <h3 className='searchName' > { category } </h3>
            
            { loading ? 
                <Loading />
            : images.length > 0 ?
                <div className='card-grid' >
                    { images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))}
                </div>
                :
                <NotResults />
            }
        </>
    )
}
