import './App.css';
import Converter from './components/Converter/Converter';
import { useState, useEffect } from 'react';

function App() {

  const [conversionRates, setConversionRates] = useState({})

  function updateCurrencies () {
        fetch(`https://v6.exchangerate-api.com/v6/ad73c3adea5a64e59ac1404c/latest/USD`)
        .then((response) => { return response.json()})
        .then((data) => setConversionRates(data.conversion_rates))
        .catch(()=>console.log('Failed to fetch'));
  }

  useEffect(()=>{
    updateCurrencies()
  }, [])

  return (
    <div className="App">
      <Converter 
        conversionRates={conversionRates}
        updateCurrencies={updateCurrencies}
      />
    </div>
  );
}

export default App;
