
import { useState } from 'react';
import { NumberButton } from './components/NumberButton';
import './style/global.css'

export function App() {

  const [previusInput, setPreviusInput] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [historic, setHistoric] = useState('');
  const [resultDisplay, setResultDisplay] = useState('')
  const [signalOperation, setSignalOperation] = useState('');

  const clear = () => {
    setPreviusInput('');
    setCurrentInput('');
    setHistoric('');
    setResultDisplay('');
    setSignalOperation('');
  }

  const percentageAttribution = () => {
    const percentage = ((Number(currentInput)) / 100);
    const percentageString = percentage.toString();
    setCurrentInput(percentageString);
  }

  const reverseValueNegativeOrPositive = () => {
    const tradeValue = ((Number(currentInput)) * (-1));
    const tradeValueString = tradeValue.toString();
    setCurrentInput(tradeValueString);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const current = event.currentTarget.value;
    setCurrentInput(prevInput => prevInput + current);
  }

  const isValidPreviusValue = (previusInput: number, operationValue: string): boolean => {
    if (previusInput < 0) {
      return false
    }

    const validOperators = ['+', '-', '*', '/']
    if (!validOperators.includes(operationValue)) {
      return false
    }
    return true
  }

  const calc = (value1: String, value2: String, operator: String) => {
    const calculateValue1 = Number(value1)
    const calculateValue2 = Number(value2)

    const operations = {
      "+": (previusInput: number, value2: number) => previusInput + value2,
      "-": (previusInput: number, value2: number) => previusInput - value2,
      "*": (previusInput: number, value2: number) => previusInput * value2,
      "/": (previusInput: number, value2: number) => previusInput / value2,
    };
    const operation = operations[operator]

    return (operation(calculateValue1, calculateValue2))
  }
  const commaAttribution = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (currentInput === '') {
      setCurrentInput('0.')
    } else if (currentInput === '0.') {
      return
    } else {
      if (currentInput.indexOf('.') === -1) {
        handleClick(event);
      }
    }
  }
  const setValues = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const operationValue = event.currentTarget.value;
    setSignalOperation(operationValue);
    if (currentInput !== '') {
      setPreviusInput(currentInput);
      setCurrentInput('')
    }

  }

  const handleSubmit = () => {
    const previusInputNumber = Number(previusInput);
    if (isValidPreviusValue(previusInputNumber, signalOperation)) {
      if (currentInput === '') {
        if (currentInput !== '') {
          setHistoric(currentInput)
        } else {
          setHistoric('0')
        }
        const resultForDisplay = calc(previusInput, currentInput, signalOperation).toString()
        setResultDisplay(resultForDisplay)
      } else {
        if (currentInput !== '') {
          setHistoric(currentInput)
        } else {
          setHistoric('0')
        }
        setCurrentInput('')
        const resultForDisplay = calc(previusInput, currentInput, signalOperation).toString()
        setResultDisplay(resultForDisplay)
      }
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-violet-500">
      <div className='w-96 h-[36rem] rounded-[3rem] shadow-2xl shadow-slate-900 bg-gray-800 text-white text-2xl'>
        <div className='p-5 m-8  rounded-2xl shadow-inner shadow-black'>
          <div className='flex justify-end items-center mb-2 gap-1'>
            <span className='text-xl opacity-50'>
              {previusInput}
            </span>
            <span className='text-xl opacity-50'>
              {signalOperation}
            </span>
            <span className='text-xl opacity-50'>
              {historic}
            </span>
            <span className='text-xl opacity-50'>
              =
            </span>
            <span className='text-xl opacity-50'>
              {resultDisplay}
            </span>
          </div>
          <div className='flex justify-between items-center h-9'>
            <span className='opacity-50'>=</span>
            <span className='text-4xl'>{currentInput}</span>
          </div>
        </div>
        <div className='m-8 grid grid-cols-4 gap-3 place-items-center place-content-center'>
          <button value={'ce'} onClick={() => { setCurrentInput('') }}>
            <NumberButton buttonValue='ce' spanClassName={'text-violet-800'} buttonClassName={''} />
          </button>
          <button value={'c'} onClick={clear}>
            <NumberButton buttonValue='c' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={'%'} onClick={percentageAttribution}>
            <NumberButton buttonValue='%' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={'/'} onClick={setValues}>
            <NumberButton buttonValue='/' spanClassName={''} buttonClassName={'bg-violet-800'} />
          </button>
          <button value={7} onClick={handleClick} >
            <NumberButton buttonValue='7' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={8} onClick={handleClick}>
            <NumberButton buttonValue='8' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={9} onClick={handleClick}>
            <NumberButton buttonValue='9' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={'*'} onClick={setValues}>
            <NumberButton buttonValue='x' spanClassName={''} buttonClassName={'bg-violet-800'} />
          </button>
          <button value={4} onClick={handleClick}>
            <NumberButton buttonValue='4' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={5} onClick={handleClick}>
            <NumberButton buttonValue='5' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={6} onClick={handleClick}>
            <NumberButton buttonValue='6' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={'-'} onClick={setValues}>
            <NumberButton buttonValue='-' spanClassName={''} buttonClassName={'bg-violet-800'} />
          </button>
          <button value={1} onClick={handleClick}>
            <NumberButton buttonValue='1' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={2} onClick={handleClick}>
            <NumberButton buttonValue='2' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={3} onClick={handleClick}>
            <NumberButton buttonValue='3' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={'+'} onClick={setValues}>
            <NumberButton buttonValue='+' spanClassName={''} buttonClassName={'bg-violet-800'} />
          </button>
          <button onClick={reverseValueNegativeOrPositive}>
            <NumberButton buttonValue='+/-' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={0} onClick={handleClick}>
            <NumberButton buttonValue='0' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={'.'} onClick={commaAttribution}>
            <NumberButton buttonValue=',' spanClassName={''} buttonClassName={''} />
          </button>
          <button value={'='} onClick={handleSubmit}>
            <NumberButton buttonValue='=' spanClassName={''} buttonClassName={'bg-violet-800'} />
          </button>
        </div>
      </div>
    </div >
  )
}