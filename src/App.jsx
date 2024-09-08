import React, { useState, useRef} from 'react'
import {Auth} from './Compontent/Auth'
import Cookies from "universal-cookie";
import Chat from './Compontent/Chat';
import { AppWrapper } from './Compontent/AppWrapper';
import "./App.css"


const cookies = new Cookies();


const App = ()=>{
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room,setRoom]= useState("");
 // const roomRef = useRef();
 // console.log(roomRef);
 
 if (!isAuth) {
  return (
    <AppWrapper
      isAuth={isAuth}
      setIsAuth={setIsAuth}
      setIsInChat={setIsInChat}
    >
      <Auth setIsAuth={setIsAuth} />
    </AppWrapper>
  );
}
 
return (
  <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
    {!isInChat ? (
      <div className="room">
        <label> Type room name: </label>
        <input onChange={(e) => setRoom(e.target.value)} />
        <button
          onClick={() => {
            setIsInChat(true);
          }}
        >
          Enter Chat
        </button>
      </div>
    ) : (
      <Chat room={room} />
    )}
  </AppWrapper>
);
}


export default App