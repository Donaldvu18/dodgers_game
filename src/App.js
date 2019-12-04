import React from 'react';
import './App.css';
import RosterContextProvider from './contexts/RosterContext';
import roster from './assets/roster.js'
import Header from './components/Header.js'
import Grid from './components/Grid.js'

function App() {
  
  return (
    <div className="App">
    
      <RosterContextProvider roster={roster}>
        <Header/> 
        <Grid/>
        </RosterContextProvider>
    </div>
  )
}

export default App;
