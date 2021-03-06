import React from 'react';
import './Select.css';

const Select = ({options, handleSelect}) => {
    return (
        <div className="selector-container">
            <div className="selector-content">
            {
                options.map((option, i) =>
                    <div 
                        key={i} 
                        onClick={() => handleSelect(option.id)} 
                        className="selector-options"
                    >
                        <label>{option.text}</label>
                    </div>
                )
            }
                
            </div>
        </div>
    );    
}

export default Select;