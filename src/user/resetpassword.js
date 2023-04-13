import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
const ResetPassword = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const history = useHistory();
    const ForgotPass = (e) => {
        e.preventDefault();
        const reg = {email}
       
        fetch('https://ybxjournall.onrender.com/forgot-password', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(reg)
          }).then((res) => {
            return res.json();
        }).then((resp) => {
          if( resp.status === "ok"){
            toast.success('Email sent successfully');
            history.push('/')
            console.log(resp, "UserForgot"); } else {
            toast.error('Password Reset Failed. Contact Support.')
            }
        }).catch((error) => {
          toast.error('Password Reset Unsuccessful');
          })
    


    }
    return ( 
        <div className="login">
          <h3> Forgot Password </h3>
          <form onSubmit={ForgotPass}>
          <label style={{
        color: "white"
      }}>Email:</label>
      <input
       type="text"
       required
       value={ email }
      onChange={(e) => setEmail(e.target.value)}
       />
             <button>Submit</button>
             <div className="register">
                <p>Don't have an account?</p> <Link to={'/signup'} style={{
                    color: "white",
                    background: "#f1356d",
                    border: "0",
                    padding: "8px",
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
 
export default ResetPassword;