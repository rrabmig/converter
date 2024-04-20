import React from 'react'
import { useState } from 'react'
import styles from './ConvertWindow.module.css'
import convert from '../../utils/convert'

const ConvertWindow = ({id, conversionRate, deleteWindow}) => {
    const [currency1, setCurrency1] = useState('')
    const [currency2, setCurrency2] = useState('')
    const [amount1, setAmount1] = useState(0)
    const [amount2, setAmount2] = useState(0)

    function handleCurrencyChange1 (e) {
        setCurrency1(e.target.value)
        if (e.target.value && currency2) {
            setAmount2(convert(e.target.value, amount1, currency2, conversionRate))
        }
    }

    function handleCurrencyChange2 (e) {
        setCurrency2(e.target.value)
        if (currency1 && e.target.value) {
            setAmount1(convert(e.target.value, amount2, currency1, conversionRate))
        }
    }

    function handleAmountChange1 (e) {
        setAmount1(e.target.value)
        if (currency1 && currency2) {
            setAmount2(convert(currency1, e.target.value, currency2, conversionRate))
        }
    }
    function handleAmountChange2 (e) {
        setAmount2(e.target.value)
        if (currency1 && currency2) {
            setAmount1(convert(currency2, e.target.value, currency1, conversionRate))
        }
    }  

  return (
    <div className={styles.exchangeWindow}>
        <div className = {styles.valueWindow}>
            <select 
                onChange = {handleCurrencyChange1}
                className = {styles.select}
            >
                <option disabled={true} selected='selected'> Выберете валюту </option>
                {Object.keys(conversionRate).map(
                    (cur)=><option key={cur}>{cur}</option>
                )}
            </select>
            <input 
                className={styles.input}
                type='number' 
                placeholder='0' 
                value={amount1} 
                onChange={handleAmountChange1}
            />
        </div>


        <img
            alt='Converting'
            src='/icons/arrow.png'
            style={{marginLeft:5, marginRight:5}}
        />


        <div className={styles.valueWindow}>
            <select 
                onChange = {handleCurrencyChange2}
                className = {styles.select}
            >
                <option disabled={true} selected='selected'> Выберете валюту </option>
                {Object.keys(conversionRate).map(
                    (cur)=><option key={cur}>{cur}</option>
                )}
            </select>
            <input 
                type='number' 
                placeholder='0' 
                value={amount2} onChange={handleAmountChange2}
                className={styles.input}
            />
        </div>
        <div>
            <button 
                className={styles.button}
            >
                <img
                    id={id}
                    onClick={deleteWindow} 
                    alt='Delete' 
                    src='./icons/trash.png' 
                    style={{width:64, height:64}}
                />
            </button>
        </div>
      </div>
  )
}

export default ConvertWindow