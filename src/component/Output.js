import React from 'react';

const Output = props => {
    const { output } = props;
    const { command, value, isError } = output;

    return (
        <>
            <div className="input-row">
                <span className="pre-symbol type-past-command">&gt;</span>
                <div className="past-output">{command}</div>
            </div>
            <div className={`input-row ${isError ? 'error-row' : ''}`}>
                <span className="pre-symbol type-past-value" style={isError ? { color: 'red' } : {}}>{isError ? 'x' : '<'}</span>
                <div className="past-output">{value}</div>
            </div>
        </>
    )
}

export default Output;