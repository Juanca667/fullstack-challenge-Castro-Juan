import './App.css';
import ColorPicker from './components/ColorPicker';
import CharList from './components/CharList';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
       {/* <ColorPicker/> */}
       <CharList/>
    </div>
  );
}

export default App;
