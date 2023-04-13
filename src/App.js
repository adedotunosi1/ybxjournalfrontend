import Navbar from './nav/Navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import NoPage from './nopage';
import SignUp from './signup';
import Login from './login';
import Dashboard from './dashboard';
import UserContent from './user/usercontent'
import UserEntry from './user/userentry';
import UserCreate from './user/usercreate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dbConnect from './db/dbconnect';
import { encodeBase64 } from 'bcryptjs';
import ResetPassword from './user/resetpassword';
import FetchUsers from './user/fetchusers';
import Images from './imageupload';
import Footer from './footer';

const User = require('./db/userModel');
<dbConnect />

function App() {
  return (
    <Router>
     <div className="App">
       <Navbar />
        <div className="content">
         <Switch>
           <Route exact path="/">
               <Home />
           </Route>
           <Route path="/create">
              <Create />
            </Route>
            <Route path="/usercreate">
              <UserCreate />
            </Route>
            <Route path="/fetchusers">
              <FetchUsers />
            </Route>
            <Route path="/images">
              <Images />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
              </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/reset">
              <ResetPassword />
            </Route>
            <Route path="/user/entry/:id">
            <UserContent />
            </Route>
            <Route path="/userentry/:id">
              <UserEntry />
            </Route>
            <Route path="*">
              <NoPage />
            </Route>
        </Switch>  
        <ToastContainer />
       </div>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
