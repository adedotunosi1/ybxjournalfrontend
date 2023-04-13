import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Burger from './burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  .logo {
    padding: 15px 0;
    list-style: none;
    text-decoration: none;
  }`

const Navbar = () => {
    return (
        <Nav>
          <div className="logo">
          <h1> <Link to="/" style={{
            color: "#f1356d",
            textDecoration: "none"
        }}>YBX Journal</Link></h1>
          </div>
          <Burger />
        </Nav>
      )
}
 
export default Navbar;