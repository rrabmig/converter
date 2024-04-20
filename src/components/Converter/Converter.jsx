import React, { useState } from 'react'
import ConvertWindow from '../ConvertWindow/ConvertWindow'
import styles from './Converter.module.css'

const Converter = ({conversionRates, updateCurrencies}) => {
    const [windows, setWindows] = useState([Date.now()])

    function deleteWindow(e) {
        setWindows(windows.filter(window =>  +window !== +e.target.id))
    }

  return (
    <main className={styles.main}>
        <div>
            <h1>Очередной конвертер валют</h1>
        </div>
        <div className={styles.windowContainer}>
            {!windows.length
            ?<p>Добавьте окно для пересчета</p>
            : windows.map((windowID =>
                <ConvertWindow
                    id={windowID} 
                    key={windowID} 
                    conversionRate={conversionRates}
                    deleteWindow={deleteWindow}
                />
            ))}
        </div>
        
        <div className={styles.buttonContainer}>
            <button 
                className={styles.button}    
            >
                <img 
                    alt='Add' 
                    src='./icons/add.png'
                    onClick={e => setWindows(prev => [...prev, Date.now()])} 
                    style={{width:64, height:64}}
                />
            </button>
            <button 
                className={styles.button}    
            >
                <img
                    onClick={updateCurrencies} 
                    alt='Refresh' 
                    src='./icons/refresh.png' 
                    style={{width:64, height:64}}
                />
            </button>
        </div>
    </main>
  )
}

export default Converter