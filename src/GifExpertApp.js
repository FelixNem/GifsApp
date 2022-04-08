import React, { useState } from 'react'
import History from './components/History';
import Historybtn from './components/modal/Historybtn';
import ModalComponent from './components/modal/ModalComponent';
import Settingbtn from './components/modal/Settingbtn';
import Settings from './components/Settings';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

import './style/appStyle.css';

const GifExpertApp = () => {
    const [showSettings, setShowSettings] = useState( false );
    const [showHistory, setShowHistory] = useState( false );

    const [categories, setCategories] = useState(['One punch']);
    const [gifs, setGifs] = useState(['One punch']);

    const [amount, setAmount] = useState(10);

    return (
        <>
            <h2 className='title' >Gif Expert App</h2>
            
            <div className='btnsModal' >
                <Historybtn  show={ setShowHistory } />
                <Settingbtn show={ setShowSettings } />
            </div>

            <AddCategory  categories={ categories } amount={ amount } setCategories={ setCategories } setGifs={ setGifs } />

            {
                gifs.map( gif => 
                    <GifGrid key={ gif } category={ gif } amount={ amount } />
                )
            }

            <ModalComponent
                show={showSettings}
                setShow={ setShowSettings }
                header={ true }
                title={'Settings'}
            >
                <Settings 
                    setAmount={ setAmount }
                    amount={ amount }
                    setShow={ setShowSettings }
                />
            </ModalComponent>

            <ModalComponent
                show={showHistory}
                setShow={ setShowHistory }
                header={true}
                title={'Recent Searches'}
            >
                <History
                    history={ categories }
                    gifs={ setGifs }
                    modal={ setShowHistory }
                />
            </ModalComponent>
        </>
    )
}

export default GifExpertApp;
