import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home.jsx';
// import Email from './Email.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/' element={<Email/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App