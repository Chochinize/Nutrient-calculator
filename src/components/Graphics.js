import { w3cwebsocket as ws } from "websocket"
import { useState,useEffect } from 'react'
import LiveChart  from './Chart'
 const Graphic = ()=>{

    const[wsclient,setWsClient] = useState()
    const[message,setMessage] = useState(0)
    useEffect(()=>{
        const fronClient = new ws('ws://localhost:5050')
        setWsClient(fronClient)
    },[])
console.log('this come from server',message)
console.log(wsclient)
    useEffect(()=>{
        if(!wsclient) return;
        wsclient.onopen = ()=>{
            wsclient.onmessage = (msg)=>{
                const  backData = JSON.parse(msg.data)
                console.log('backData',backData)
                setMessage(...[backData.hello]);
            }
        }
    },[wsclient])

    return (
        <div >
             <LiveChart message={message}/>
        </div>
    )
}

export default Graphic