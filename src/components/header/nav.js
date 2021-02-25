import React from "react";
import {Link} from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import Contact from '../pages/contact';
import NameForm from '../pages/forms';
import FormExample from '../pages/form1';
import './nav.css'
import styled, { css } from 'styled-components'


const Navbar= styled.div`
  background-color: #8EE4AF;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  margin-top: 5px;
  height:15vh;
`;
const NavHeader = styled.div`
  max-width: 100%;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const MenuLink = styled(Link)`
    padding: 10px;
    color:black;
    text-decoration: none;
    &:hover {
    color: #CAFAEF;
    background: #97CAEF;
  }
  `;
function Nav() {
  return (
    <Navbar>
      <NavHeader>
    
        <MenuLink to = "/" > home </MenuLink>
        <MenuLink to = "/about"> about </MenuLink>
        <MenuLink to = "/form">projects </MenuLink>
        <MenuLink to = "/form1">formtwo </MenuLink>
        <MenuLink to = "/contact">Find Me</MenuLink>
       </NavHeader>
    </Navbar>
  );
}

export default Nav;

