import React from 'react';
import {useState, useEffect} from 'react';
import './timer.css'

function Timer() {

    const[seconds,setSeconds] = useState(0)
    const[minutes,setMinutes] = useState(0)
    const[hours, setHours] = useState(0)
    const[state, setState] = useState(false)

    const startTimer = () =>{
        setState(true)
    }

    const stopTimer = () =>{
        setState(false)
        clearInterval(timer)
    }

    var timer;
    useEffect(() => {
        if(state){
        timer = setInterval(() =>{
            setSeconds(seconds+1)

            if(seconds === 59){
                setMinutes(minutes+1);
                setSeconds(0);
            }
            if(minutes=== 59){
                setHours(hours+1)
                setMinutes(0)
                setSeconds(0)
            }
        },1000)}

        return ()=> clearInterval(timer);
    });
  return (
    <div>
        <div className='timer'>
        <h2>{hours<10? '0'+hours:hours}:{minutes<10?'0'+minutes:minutes}:{seconds<10? '0'+seconds:seconds}</h2></div>
        {!state && (
        <div className='start_btn' onClick={startTimer}>
          Start
        </div>
      )}
      {state && (
        <div className='stop_btn' onClick={stopTimer}>
          Stop
        </div>
      )}

    </div>

  )
}

export default Timer;
