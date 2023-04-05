import { useState } from "react";
import Quiz from "./Quiz/Quiz"
import Result from "./Quiz/Result";
import {Route,Routes} from 'react-router-dom';

function App() {

  const [res,setRes] = useState(0);

  console.log("result is ",res)


  
 
  const path = window.location.pathname;

  return (
   <div>
    <div>
      <Routes>
          <Route index element = {<Quiz  setRes = {setRes}/>}/>
          <Route path = "/result" element = {<Result result = {res}/>}/>
      </Routes>
      
    </div>
   </div>
  )
}

export default App
