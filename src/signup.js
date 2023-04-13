import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
     



     const [id, setId] = useState("");
     const [name, setName] = useState("");
     const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [error, setError] = useState(null);

     const history = useHistory();

    const handleformsubmit = (e) => {
        e.preventDefault();
        const reg = {name, id, password, email, phone}
       
        fetch('https://ybxjournall.onrender.com/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(reg)
          }).then(() => {
            console.log(reg);
            history.push('/login')
            toast.success('Registration Successful')
            toast.success('Welcome Comrade')
          }).catch((err) => {
            setError(err.message);
          })
    


    }
    return ( 
        <div className="signup">
            <form onSubmit={handleformsubmit}>
             <div className="signup-header">
                <h2>New User Registration</h2>
             </div>
             <div id="recaptcha-container"></div>
             <div className="form-body">
             <label>Full Name:</label>
             <input value={name} type="text" required onChange={(e) => setName(e.target.value)} />
             <label>Username</label>
             <input value={id} required  onChange={(e) => setId(e.target.value)} type="text"/>
             <label>Password</label>
             <input value={password} type="password" required onChange={(e) => setPassword(e.target.value)}/>
             <label> Email </label>
             <input value={email} type="email" required onChange={(e) => setEmail(e.target.value)}/>
             <label> Phone No </label>
             <input type="number" value={phone} required onChange={(e) => setPhone(e.target.value)} />
            
             </div>
             <div className="form-footer">
                <button> Register </button> 
             </div>
             <button> <Link to={'/login'}> Login </Link></button>
             <div className="register">
                <p>Forgot Password?</p> <Link to={'/reset'} style={{
                    color: "white",
                    background: "#f1356d",
                    border: "0",
                    padding: "8px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginLeft: "20px",
                    textDecoration: "none"
                }}>Reset Now</Link>
             </div>
            </form>
        </div>
     );
}
 
export default SignUp;