import React from 'react';
import './WorkSpace.css';
import * as Louder from './components/loadElements'

function WorkSpace() {
    window.addEventListener('DOMContentLoaded', ()=>{Louder.loadElements()});
    return (
        <div id='WorkSpace' className="WorkSpace"></div>
    );
}

export default WorkSpace;