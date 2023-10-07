import React,{useState,useEffect} from "react"
export default function Experiment11(){
    const[mytime,setTime]=useState("");
    const tick=()=>{
        const hours=new Date().getHours();
        const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
        let time=displayHours+":"+new Date().getMinutes()+":"+new Date().getSeconds();
        if(hours<12)
          time=time+"AM"
        else
          time=time+"PM"
        setTime(time);
    }
    useEffect(()=>{
        const t=setInterval(tick,1000);
        return()=>{
            clearInterval(t);
        }
    },[mytime])
    return(
        <div>
            <h1>DigitalClock</h1>
            <h2>{mytime}</h2>
        </div>
    );
}