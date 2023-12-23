import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'
const Quiz = () => {
    const[index,setindex] = useState(0)
    const [qus,setqus] = useState(data[index])
    const [lock,setlock] = useState(false)
    const[score,setscore] = useState(0)
    const [result,setresult] = useState(false)
    
    

let option1 = useRef(null)
let option2 = useRef(null)
let option3 = useRef(null)
let option4 = useRef(null)

let option_array =[option1,option2,option3,option4]
    const checkAns=(e,ans)=>{
   if(lock===false){
    if(qus.ans===ans){
        e.target.classList.add('win')
      setlock(true)
      setscore(score+1)
       }else{
        e.target.classList.add('fail')
        setlock(true)
        option_array[qus.ans-1].current.classList.add('win')
       }
        }
   }

   
    const addindex = ()=>{
       if(lock===true){
        if(index===data.length-1){
            setresult(true)
            return 0
        }
        setindex(index+1)
        setqus(data[index+1])
       setlock(false)
    option_array.map((option)=>{
        option.current.classList.remove("fail")
        option.current.classList.remove("win")
        
        return null;
    }
    
  )}
}
  
    

    let startingQus=index+1
    let EndingQus =data.length

    const reset=()=>{
        setindex(0)
        setlock(false)
        setqus(data[0])
        setscore(0)
        setresult(false)

    }




       




  return (
    <div className='container-fluids'>
      <h1 className='head'>Quiz App</h1>
      
      <h3 className='head'>{startingQus}/{EndingQus} Qus</h3>
    
      <hr />

{result?<></>:<><h2 className='question'>{index+1}.{qus.question} </h2> 
<ul>
    <li ref={option1} className='fixcolor'  onClick={(e)=>checkAns(e,1)}>{qus.option1}</li>
    <li  ref={option2} className='fixcolor' onClick={(e)=>checkAns(e,2)} >{qus.option2}</li>
    <li  ref={option3} className='fixcolor' onClick={(e)=>checkAns(e,3)}>{qus.option3}</li>
    <li  ref={option4}className='fixcolor' onClick={(e)=>checkAns(e,4)}>{qus.option4}</li>
</ul>
<button onClick={addindex} className='btn i ms-4 pt-3 pb-3 ps-5 pe-5' >Next</button>
</>}
{result?<><h2> Nice try, You Scored {score} out of {data.length}</h2>
<button className='btn i' onClick={reset}>reset</button></>:<></>}</div>
  )
}

export default Quiz
