import React,{useEffect,useState,useRef} from 'react'

function Calculator() {
    const [result,setResult] = useState("");
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[]);
   const handleClick = (e) =>{
      setResult(result.concat(e.target.name))
   }
 const Clear = () =>{
    setResult("");
 }
 const BackSpace = () => {
       setResult(result.slice(0,-1))
 }
 const Result = () =>{
     try{
         setResult(eval(result).toString())
     }catch(error){
        setResult("Error")
     }
 }

    return (
        <section className="calculator_section">
            <div className="container">
                <div className="calcu_wrap">
                    <form>
                        <input type="text" ref={inputRef} value={result}/>
                    </form>
                    <div className="keyboard">
                        <button onClick={Clear}>Clear</button>
                        <button onClick={BackSpace}>Backspace</button>
                        <button name="1" onClick={handleClick}>1</button>
                        <button name="2" onClick={handleClick}>2</button>
                        <button name="3" onClick={handleClick}>3</button>
                        <button name="4" onClick={handleClick}>4</button>
                        <button name="5" onClick={handleClick}>5</button>
                        <button name="6" onClick={handleClick}>6</button>
                        <button name="7" onClick={handleClick}>7</button>
                        <button name="8" onClick={handleClick}>8</button>
                        <button name="9" onClick={handleClick}>9</button>
                        <button name="0" onClick={handleClick}>0</button>
                        <button name="*" onClick={handleClick}>&times;</button>
                        <button name="+" onClick={handleClick}>+</button>
                        <button name="/" onClick={handleClick}>/</button>
                        <button name="-" onClick={handleClick}>-</button>
                        <button onClick={Result}>Result</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator
