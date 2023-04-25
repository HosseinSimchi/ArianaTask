import React, {useState} from 'react';

import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';

import myContext from './context/context';


const App = () => {


  // const [showNextPage, setShowNextPage] = useState(false)
  const [show, setShow] = useState(localStorage.getItem('showNextPage'))
  
  return (
    <>
      <myContext.Provider value={{functionName : setShow, varName : show}}>
        { show ? <SecondPage /> : <FirstPage />}
      </myContext.Provider>
    </>
  )

}

export default App;
