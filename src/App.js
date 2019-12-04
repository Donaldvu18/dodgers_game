import React ,{useEffect} from 'react';
import './App.css';
import RosterContextProvider from './contexts/RosterContext';
import roster from './assets/roster'
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'
// add footer ,dodgers logo in header, counter for wins, add positions, change congrats photo, fade red when clicking wrong photo, change box shadow a bit gray looks musty
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
        <Footer/>
    </div>
  )
}

export default App;
