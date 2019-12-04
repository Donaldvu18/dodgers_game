import React ,{useEffect} from 'react';
import './App.css';
import RosterContextProvider from './contexts/RosterContext';
import roster from './assets/roster.js'
import Header from './components/Header.js'
import Grid from './components/Grid.js'

function App() {
  useEffect(
    () => {
      document.body.style.background = 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%'
    })

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
