import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 35%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
   const isLoggedIn = window.localStorage.getItem("loggedIn");
    const removeuser = () => {
      toast.success("You have now signed out!");
        localStorage.clear();
        window.location = '/';
       
    }
  /*  const navBarComponents = document.querySelectorAll('.navbar');

navBarComponents.forEach(component => {
  component.addEventListener('click', closeNavBar);
});
    function closeNavBar() {
      const navBar = document.querySelector('.nav');
      navBar.remove();
    }
*/
  return (
    <Ul open={open}>
    <div className="nav">
    <nav className="navbar">
        {!isLoggedIn?<div className="links">
            <Link to="/login" style={{
                color: "white", 
                backgroundColor: "#f1356d",
                borderRadius: '8px'
            }}>Login</Link>
        </div>: <div className="links">
            <Link to="/usercreate" style={{
                color: "white", 
                backgroundColor: "#f1356d",
                borderRadius: '8px'
            }}>New Private Entry</Link>
            <Link to="/dashboard" style={{
                color: "white", 
                backgroundColor: "#f1356d",
                borderRadius: '8px'
            }}>Dashboard</Link>
          <button onClick={ removeuser }><Link to="/" style={{
                color: "white", 
                backgroundColor: "#f1356d",
                borderRadius: '8px'
            }}>Logout</Link> </button>
        </div>}
    </nav>
    </div>
    </Ul>
  )
}

export default RightNav