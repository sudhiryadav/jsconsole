import React, { useEffect, useState } from 'react';
import './App.css';
import Output from './component/Output';
import TextInput from './component/TextInput';
let id = 0;

function App() {
  const [output, setOutput] = useState([]);
  const [currentCommandCursor, setCurrentCommandCursor] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const keyPressWindowEvent = e => {
    if (e.ctrlKey && e.key === 'd') {
      setOutput([]);
    }
  };

  const clearOutput = () => {
    setOutput([]);
  }

  useEffect(() => {
    window.addEventListener('keypress', keyPressWindowEvent);
    return () => {
      window.removeEventListener('keypress', keyPressWindowEvent);
    }
  }, [])

  const onExecute = (newOutput, key) => {
    if (newOutput) {
      newOutput.id = id++;
      setCurrentCommandCursor(output.length);
      setOutput([...output, newOutput])
    }
    else {
      if (!output || output.length === 0) return;
      if (key === 'ArrowUp') {
        setCurrentCommandCursor(currentCommandCursor === 0 ? 0 : currentCommandCursor - 1);
      }
      else if (key === 'ArrowDown') {
        setCurrentCommandCursor(currentCommandCursor === output.length - 1 ? output.length - 1 : currentCommandCursor + 1);
      }
      setCurrentCommand(output[currentCommandCursor].command);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        Synaptic Console
      </header>
      <div>Use up and down arrow for history. Ctrl+d to clear history</div>
      <div className="container">
        {output.map(o => <Output key={o.id} output={o} />)}
        <TextInput onExecute={onExecute} currentCommand={currentCommand} clearOutput={clearOutput} />
      </div>
    </div>
  );
}

export default App;
