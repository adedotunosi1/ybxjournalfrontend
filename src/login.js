import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SignUp from "./signup";
import { toast } from "react-toastify";
import Dashboard from "./dashboard";

const Login = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const UserLogin = (e) => {
        e.preventDefault();
        const reg = {id, password};
        if(validate()){
       
            fetch('https://ybxjournall.onrender.com/login-user', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(reg)
              }).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp);
            if(Object.keys(resp).length === 0){
               toast.error('Please Enter valid username')
            } else {
                if( resp.status === "ok"){
                   toast.success('login successful.');
                   window.location = '/dashboard';
                   window.localStorage.setItem("token", resp.data);
                   window.localStorage.setItem("loggedIn", true);

                   
                } else {
                    toast.error('Incorrect password')
                }
            }
        }).catch((err)=> {
            toast.error('there is an error to be fixed:');
        })
    }
    }
    const validate = () => {
        let result = true;
         if(id === '' || id == null){
            result = false;
            toast.warning('Username Required');
         }
         if (password === '' || password === null ){
            result = false;
            toast.warning('Password Required')
         }
        return result;
    }


    return ( 
        <div className="login">
          <h3> Login now! </h3>
          <form onSubmit={UserLogin}>
             

          <label style={{
        color: "white"
      }}>Username:</label>
      <input
       type="text"
       required
       value={ id }
      onChange={(e) => setId(e.target.value)}
       />
      <label style={{
        color: "white"
      }}>Password:</label>
      <input type="password"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
             <button>Login</button>
             <div className="register">
                <p>Forgot Password?</p> <Link to={'/reset'} style={{
                    color: "white",
                    background: "#f1356d",
                    border: "0",
                    padding: "10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginLeft: "20px",
                    textDecoration: "none"
                }}>Reset Now</Link>
             </div>
             <div className="register">
                <p>Don't have an account?</p> <Link to={'/signup'} style={{
                    color: "white",
                    background: "#f1356d",
                    border: "0",
                    padding: "10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginLeft: "20px",
                    textDecoration: "none"
                }}>Sign Up</Link>
                </div>
          </form>
        </div>
     );
}
 
export default Login;