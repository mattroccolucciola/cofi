import React, {useState} from 'react';
import './App.css';
import Sequencer from './components/Sequencer';
import Visualizer from './components/Visualizer';
import Header from './components/Header';
import BPMControl from './components/BPMControl';

function handleKeyPress(e){
    let key = e.key;
    if (key === 'p'){
        handleSequencerToggle(e)
    }
}

function handleSequencerToggle(e, showPattern, setShowPattern){
    console.log('toggled sequencer elem',e, showPattern, setShowPattern);
    setShowPattern(!showPattern)
}

document.onkeypress = handleKeyPress

function App() {
    let [globalBPM, setGlobalBPM] = useState(128)
    function getBPM(bpm){
        console.log('this is bpm: ', bpm);
        setGlobalBPM(Number(bpm));
    }

    return (
        <div className="App">
            <Header />
            <BPMControl getBPM={getBPM} />
            <Sequencer globalBPM={globalBPM} handleSequencerToggle={handleSequencerToggle} />
            <Visualizer globalBPM={globalBPM} />
        </div>
    );
}

export default App;
