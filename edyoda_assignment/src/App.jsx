import './App.css';
import React from 'react';
import { styled } from 'styled-components';

import NavBar from './Components/NavBar';
import Text from './Components/Text';
import Form from './Components/Form';

function App() {
  return (
    <>
      <NavBar />
      <Form />
      <Text />
      <ButtonContainer>
        <CancelButton>CANCEL</CancelButton>
        <ProceedButton>POCEED TO PAY</ProceedButton>
      </ButtonContainer>
    </>
  );
}


const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 30px;
  margin-left: 63rem;
  margin-top: 4rem;
`;

const CancelButton = styled.button`
  width: 200px;
  background-color: #ffc5c1;
  color: black;
  padding: 10px;
  border: 2px solid #ff3426;
  border-radius: 5px;
  cursor: pointer;

  
  `;

const ProceedButton = styled.button`
  background-color: #4CAF50;
  width: 200px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default App;
