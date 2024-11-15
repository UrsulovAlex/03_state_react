import { useState } from 'react';

import Header from './components/Header.jsx';
import UsrerInput from './components/UserInput.jsx';
import Results from './components/Result.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
})

const isValidInput = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    })
}
  return (
    <>
      <Header />
      <UsrerInput onChange={handleChange} userInput={userInput} />
      {isValidInput && <Results input={userInput} />}
      {!isValidInput && (<p className='center'>Please enter a duration greater than zero.</p>)}
    </>
  )
}

export default App
