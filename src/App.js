import React from 'react' // rafce
import Restaurant from './component/Basics/Restaurant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Showresult from './component/Basics/Showresult';
import Details from './component/Basics/Details';
// import UseState from './component/Hooks/useState';
// import UseEffect from './component/Hooks/useEffect';
// import UseReducer from './component/Hooks/useReduder';

const App = () => {  //  its also called a functional component
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/Showresult" element={<Showresult/>}/>
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="/reactapp" element={<Restaurant/>}/>
      </Routes>
    </Router>
    {/* <Restaurant/> */}
    {/* <UseState/> */}
    {/* <UseEffect/> */}
    {/* <UseReducer/> */}
   
    </>
  )
};



export default App