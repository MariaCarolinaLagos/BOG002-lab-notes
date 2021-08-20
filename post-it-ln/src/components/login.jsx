import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import { auth } from '../firebase-config'
 

function Login  ()  {
    // let history = useHistory();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

       
      
        
    

    const registerUser = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then((res) => {
                alert('Usuario Registrado')
                // history.push("/Home");
                // console.log(res)
            })
    }
    return (
        <div> 
            <h1> Login to Post-it </h1>
            <form onSubmit={registerUser}>
                <input 
                    onChange={(e) => { setEmail(e.target.value)}} placeholder="email" type="email"
                />
            <br></br>
                <input 
                onChange={(e) => { setPass(e.target.value)}}placeholder="password" type="password"
                />
            <br></br>
                <input type="submit" value="Login" />
            <br></br>
            <h3>Or</h3>
                {/* <button onClick={loginGoogle}>GOOGLE</button>  */}

                
            </form>
        </div>
    )
}

export default Login 

