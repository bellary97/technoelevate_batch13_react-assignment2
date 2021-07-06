import  React,{useState} from "react";
const ToList=()=>
{
    const[num,setNum] = useState(0);
    const incNum = ()=>
    {
        setNum(num+1)
    }
    const decNum = ()=>
    {
        setNum(num-1)
    }
    const resNum = ()=>
    {
        setNum(0)
        
    }
    return(
        <>
           <div className="main">
           <div className="center_div">
               <h1> {num} </h1>
               <div className="btn_div">
                  <button onClick={incNum}>+</button>
                  <button onClick={resNum}>reset</button>
                  <button onClick={decNum}>-</button>
               </div>
           </div>
           </div> 
        </>
    )
}
export default ToList 