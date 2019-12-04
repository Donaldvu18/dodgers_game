import React ,{useEffect} from 'react';
import './App.css';
import RosterContextProvider from './contexts/RosterContext';
import roster from './assets/roster.js'
import Header from './components/Header.js'
import Grid from './components/Grid.js'
// add footer ,dodgers logo in header, counter for wins, add positions, change congrats photo
function App() {
  useEffect(
    () => {
      // document.body.style.background = 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%'
      document.body.style.background ='cornflowerblue';
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
