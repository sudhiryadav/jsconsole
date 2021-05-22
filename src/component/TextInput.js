import React, { useEffect, useState } from 'react';

const TextInput = props => {
    const { currentCommand, onExecute, clearOutput } = props;
    const [command, setCommand] = useState('"1"==="1"');

    useEffect(() => {
        setCommand(currentCommand);
    }, [currentCommand]);

    const onKeyDown = e => {
        const newCommand = e.target.value;
        if (e.ctrlKey && e.key === 'd') {
            clearOutput();
            return;
        }

        let evaluatedCommand, isError;
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();

            if (newCommand === '') {
                return;
            };

            try {
                let resp = eval(newCommand);
                if (resp === true)
                    resp = 'true'
                if (resp === false)
                    resp = 'false'

                evaluatedCommand = <span> {resp}</span>;
                isError = false;
            } catch (e) {
                evaluatedCommand = <><span>{e.name}</span>{` {"`}<span style={{ color: '#02a902' }}>{e.message}</span>{`"}`}</>;
                isError = true;
            }

            setCommand('');
            onExecute({ command: newCommand, value: evaluatedCommand, isError }, e.Key);
        } else if (e.key === 'ArrowUp' || e.key === "ArrowDown") {
            onExecute(null, e.key);
        }
    };

    const onChange = e => {
        setCommand(e.target.value);
    }

    return <div className="input-row" style={{ borderBottom: 'none' }}>
        <span className="pre-symbol type-input" >&gt;</span>
        <textarea autoComplete="true" autoFocus spellCheck className="text-input" value={command} onKeyDown={onKeyDown} onChange={onChange}></textarea>
    </div>
}

export default TextInput;