import React from "react";
import {Link} from 'react-router-dom'



function Result({result}) {


    return(
        <div className="flex flex-col justify-center items-center h-screen">
          <span className="text-xl font-bold p-4 shadow-xl">correct answers are {result} </span>
          <Link to = "/"><h2 className="text-sm font-bold text-indigo-500 p-5">play again</h2></Link>
        </div>
    )
}

export default Result;