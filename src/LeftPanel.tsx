import React from 'react';
import './LeftPanel.css';
import * as createShapes from './components/createShapes'



function LeftPanel() {
    return (
        <div className="LeftPanel">
            <div className="Shapes">
                <p>
                    Shapes
                </p>
                <div className="Shape">
                    <div className="Rectangle">
                        <a href='#' onClick={(event) => createShapes.createRectangle()}>
                            <svg id="Rectangle"></svg>
                        </a>
                    </div>
                    <div className="Triangle">
                        <a href="#" onClick={(event) => createShapes.createTriangle()}>
                            <svg id="Triangle"><polygon points="0,50 50,0 100,50"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="Style">
                <p>
                    Style
                </p>
                <div className="form">
                    <label>Fill</label>
                    <input id="colorpicker" type="color" disabled />
                </div>
            </div>

        </div>
    );
}

export default LeftPanel;