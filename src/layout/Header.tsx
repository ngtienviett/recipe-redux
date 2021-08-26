import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Brand = styled.h1`
  font-size: 1.2remm;
  font-weight: 500;
  padding-right: 20px;
 
`;
const Nav = styled.ul`
  margin-top: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #ebd7d7;
`;

const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #d6caca;
  }

  a {
    color: black;
    display: block;
    padding: 20px 30px;
    &:hover {
      text-decoration: none;
    }
  }
`;
const Header = () => {
  return (
    <Nav>
      {/* <NavItem> */}
        <Brand>
          Recipe Book
        </Brand>
      {/* </NavItem> */}
      <NavItem>
        <NavLink to="/recipes" activeClassName="active-link">
          Recipes
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/shopping-list" activeClassName="active-link">
          Shopping List
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Header
