import React, { useEffect, useState } from 'react'

function OnLineer() {

    const[isOnline,setIsOnline]=useState(true);
    useEffect(()=>{
        setIsOnline(window.navigator.onLine);
        window.addEventListener("offline",()=>{setIsOnline(false)});
        window.addEventListener("online",()=>{setIsOnline(true)})
    },[])
  return (
    <div>
        <span>{isOnline ? "online" : "ofline"}</span>
    </div>
  )
}

export default OnLineer