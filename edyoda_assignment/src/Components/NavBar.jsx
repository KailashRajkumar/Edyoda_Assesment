import { FaSistrix } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <Nav>
      <Title>EDYODA</Title>
      <Select>
        <option value="courses">Courses</option>
      </Select>
      <Select>
        <option value="programs">Programs</option>
      </Select>
      <div>
      <FaSistrix />
      <Login>Log in</Login>
      <JoinNow>Join Now</JoinNow>
      </div>
      
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background-color: #ffffff;

  div{
    margin-left: 48rem;
  }
`;



const Title = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 45px;
  margin: 0;
  background: linear-gradient(90.72deg, #0096FF 42.18%, #0048FF 93.77%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Select = styled.select`
  margin-left: 24px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const Login = styled.span`
  margin-left: 24px;
  font-size: 16px;
  color: #333333;
  cursor: pointer;
`;

const JoinNow = styled.button`
  margin-left: 24px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%);
  padding: 8px 16px;
  border-radius: 52px;
  border: none;
  cursor: pointer;
`;

export default NavBar;
