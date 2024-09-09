import {auth , provider} from '../firebase/Firebase-config'
import {signInWithPopup} from 'firebase/auth' 
import Cookies  from "universal-cookie";
import '../style/Auth.css'

const cookies = new Cookies();  // to save login id

export const Auth =({setIsAuth})=>{
    const signInWithGoogle = async ()=>{
      try{
        const result=  await signInWithPopup(auth, provider);
      //console.log(result);
      cookies.set("auth-token",result.user.refreshToken)
      setIsAuth(true);
      }
      catch(err){
          console.error(err);
      }

    }
    return(
        <div className="auth">
            <p style={{fontSize:"larger",color:"blue",
              fontFamily:"sans-serif"
            }}>Sign In With Google To Continue</p>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}