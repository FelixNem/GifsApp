import React from 'react';

const Settings = ({ setAmount, amount, setShow }) => {

    const handleAmount = ( e ) => {
        setAmount( e.target.value );
        setShow( false );
    }

    return (
        <form className="input-group grid">
            <select
                onChange={ handleAmount }
                defaultValue={ amount }
                className="form-select"
            >
                <option value={'5'} > 5 </option>
                <option value={'10'} > 10 </option>
                <option value={'15'} > 15 </option>
                <option value={'20'} > 20 </option>
                <option value={'25'} > 25 </option>
                <option value={'30'} > 30 </option>
                <option value={'35'} > 35 </option>
            </select>
        </form>
    )
}

export default Settings