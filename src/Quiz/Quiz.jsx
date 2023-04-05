import React, { useState } from "react";
import { QuizData } from "./First";
import {Link} from 'react-router-dom'
import Result from "./Result";

function Quiz({setRes}) {

    let [currentQuestion,setCurrentQuestion] = useState(0);
    const [op,setOp] = useState(0);
   const [score,setScore] = useState(0);
   const [clicked,setClicked] = useState(0);
  
   


   

   
    

    function handleChangeQuestion() {

      setClicked(0);
      updateScore();
      
      

        setRes(score)
      
      if(currentQuestion < (QuizData.length - 1)) {

        setCurrentQuestion(currentQuestion + 1);
        setOp(op + 1);
       
       }

       
    

     }


     const updateScore = ()=> {

        
      
        if(clicked === QuizData[currentQuestion].answer) {

            setScore(score + 1);
           }
     }

    
  


    return(

        <div className="flex flex-col h-screen justify-center items-center">
           <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold">Quizz</h2>

                
           </div>
           <div className="p-20 shadow-xl">
            <div className="p-2 flex justify-center items-center gap-1">
              <span className="text-xl font-bold">{currentQuestion + 1}. </span> 
             <span className="text-xl font-bold">{QuizData[currentQuestion].question}</span>
             </div>
            <div className="space-y-3 flex flex-col justify-center items-center">
             {QuizData[currentQuestion].option.map((option,i)=> {
             
                   
                return(
                    <button  
                    key={i}
                  
                    onClick={()=>setClicked(i + 1)}
                   className={` ${clicked == i+1 ? "bg-black text-white" : ""}
                    text-lg font-bold
                    rounded-lg flex flex-col justify-center items-center p-2  w-52 shadow-xl `} >
                    {option}
                    </button>
                )
             })}
            </div>

             <div className="p-5 flex flex-col justify-center items-center gap-4">
                <button type="button" onClick={handleChangeQuestion} value="next" 
                 className="p-2 hover:active:bg-gray-500 rounded-lg bg-black text-white w-36">
               {currentQuestion == QuizData.length-1 ?<Link to="/result">
                 submit
                </Link>: "submit"}
                 </button>

                 
               
             </div>
           </div>
        </div>
    )
}

export default Quiz;