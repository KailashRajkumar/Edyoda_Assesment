import React from 'react'
import { styled } from 'styled-components';
import { FaEnvelopeSquare } from 'react-icons/fa';
import img from '../asset/image001.jpg'
import { useState } from 'react';

const Form = () => {
  const [total, setTotal] = useState(0);

  function updateTotal(price) {
    setTotal(price);
    console.log(updateTotal);
  }

  return (
    <>
      <StyledForm>
        <InputLabel1>
          <span>1</span>
          <input type="button" name='button' id='sign-in' value={"Sign in"} />
          <label htmlFor="sign-in"></label>
        </InputLabel1>
        <InputLabel2>
          <span>2</span>
          <input type="button" name='button' id='subscribe' value={"Subscribe"} />
        </InputLabel2>
        <Title>
          <span>
            Select Your Subscription Plan
          </span>
        </Title>
        <FormContainer>
          <p>offer expired</p>
          <input id="subscription-1"  defaultChecked={true} disabled={false} type="radio" name="subscription" value="99" onChange={() => updateTotal(99)} />
          <label htmlFor="subscription-1">12 Months Subscription</label>
          <div>
            <span>Total ₹99</span>
            <span>₹8 /mo</span>
          </div>
        </FormContainer>
        <FormContainer2>
          <p>Recommended</p>
          <input id='subscription-2' defaultChecked={true} disabled={false} type="radio" name="subscription" value="179" onChange={() => updateTotal(179)} />
          <label htmlFor='subscription-2'>12 Months Subscription</label>
          <div>
            <span>Total ₹179</span>
            <span>₹15 /mo</span>
          </div>
        </FormContainer2>
        <FormContainer3>
          <input id='subscription-3'  defaultChecked={true} disabled={false} type="radio" name="subscription" value="149" onChange={() => updateTotal(149)} />
          <label htmlFor='subscription-3'>6 Months Subscription</label>
          <div>
            <span>Total ₹149</span>
            <span>₹25 /mo</span>
          </div>
        </FormContainer3>
        <FormContainer4>
          <input  id='subscription-4' defaultChecked={true} disabled={false} type="radio" name="subscription" value="99" onChange={() => updateTotal(99)} />
          <label htmlFor='subscription-4'>2 Months Subscription</label>
          <div>
            <span>Total ₹99</span>
            <span>₹33 /mo</span>
          </div>
        </FormContainer4>
        <HrLine></HrLine>
        <Text>
          <p>Subscription fee</p>
          <span>₹18,500</span>
        </Text>
        <FormContainer5>
          <label>
            <p>Limited time offer</p>
            <span>-₹18,401</span>
            <h4><FaEnvelopeSquare />valid till 25th March 2023</h4>
          </label>
        </FormContainer5>
        <Text1>
          <p>Total(Incl. of 18% GST)</p>
          <span>₹{total}</span>
        </Text1>
        <ButtonContainer>
          <CancelButton>CANCEL</CancelButton>
          <ProceedToPayButton>PROCEED TO PAY</ProceedToPayButton>
        </ButtonContainer>
        <PNG>
          <img src={img} alt="" />
        </PNG>
      </StyledForm>
    </>
  )
}





const StyledForm = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  width: 30%;
  height: 36rem;
  margin-right: 4rem;
  margin-top: 3rem;
  padding-bottom: 10rem;
  border-radius: 10px;

`

const InputLabel1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  height: 70px;
  width: 100%;
  cursor: pointer;

  input[type=button]{
    background-color: #ffffff;
    border: none;
    cursor: pointer;
  }

  span{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #0096FF;
    color: #fff; 
    text-align: center;
    line-height: 30px; 
    cursor: pointer; 
  }
`

const InputLabel2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  cursor: pointer;

  input[type=button]{
    background-color: #ffffff;
    border: none;
    cursor: pointer;
  }

  span{
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #0096FF;
  color: #fff; 
  text-align: center;
  line-height: 30px; 
  cursor: pointer;

  }
`

const Title = styled.h2`
position: absolute;
margin-top: 5rem;
`

const FormContainer = styled.label`

  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 5px;
  margin-top: 8rem;
  width: 25%;
  height: 5%;
  background: #E7E7E7;
  border: 2px solid #BEBEBE;
  border-radius: 4px;

  input[type=radio]{
    cursor: pointer;
  }

  div{
    float: right;
    display: flex;
    flex-direction: column;
    margin-left: 9rem;
    font-size: xx-small;
    font-weight: bolder;
  }

  p{
    position: absolute;
    text-align: center;
    width: 7rem;
    height: 1.5rem;
    left: 2.5rem;
    bottom: 2rem;
    background: #F77171;
    border-radius: 0px 0px 4px 4px;
  }
`
const FormContainer2 = styled.label`

  position: absolute;
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 12px;
isolation: isolate;
margin-top: 13rem;
width: 25%;
height: 5%;

background: #D7EDDD;
border: 2px solid #47BA68;
border-radius: 4px;

  div{
    float: right;
    display: flex;
    flex-direction: column;
    margin-left: 9rem;
    font-size: xx-small;
    font-weight: bolder;
  }

  p{
    position: absolute;
    text-align: center;
    width: 7rem;
    height: 1.5rem;
    left: 2.5rem;
    bottom: 2rem;
    background: #47BA68;
    border-radius: 0px 0px 4px 4px;
  }
`

const FormContainer3 = styled.label`

  position: absolute;
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 12px;
isolation: isolate;
margin-top: 18rem;
width: 25%;
height: 5%;

background: #ffffff;
border: 2px solid #BEBEBE;
border-radius: 4px;

  div{
    float: right;
    display: flex;
    flex-direction: column;
    margin-left: 9.5rem;
    font-size: xx-small;
    font-weight: bolder;
  }

  
`
const FormContainer4 = styled.label`

  position: absolute;
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 12px;
isolation: isolate;
margin-top: 23rem;
width: 25%;
height: 5%;

background: #ffffff;
border: 2px solid #BEBEBE;
border-radius: 4px;

  div{
    float: right;
    display: flex;
    flex-direction: column;
    margin-left: 9.5rem;
    font-size: xx-small;
    font-weight: bolder;
  }
`

const HrLine = styled.hr`
    position: absolute;
    background: linear-gradient(0deg, #BEBEBE, #BEBEBE),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
    width: 26rem;
    height: 0.1rem;
    margin-top: 29rem;
`

const Text = styled.p`
  position: absolute;
  margin-top: 29rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span{
    margin-left: 15rem;
  }

`

const FormContainer5 = styled.label`

    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;
    isolation: isolate;
    margin-top: 32rem;
    width: 25%;
    height: 5%;
    color: #DE4313;
    background: #faded3;
    border: 2px solid #BEBEBE;
    border-radius: 4px;

   span{
    position: absolute;
    margin-left: 20.5rem;
    margin-bottom: 2rem;
   }

  div{
    float: right;
    display: flex;
    flex-direction: row;
    margin-left: 9.5rem;
    font-size: xx-small;
    font-weight: bolder;

  }

  p{
    position: absolute;
    text-align: center;
    width: 8rem;
    height: 1.5rem;
    left: 1rem;
    bottom: 2rem;
    color: #DE4313;
    border-radius: 0px 0px 4px 4px;
  }

  h4{
    font-weight: 500;
  }

  `

const Text1 = styled.p`
position: absolute;
margin-top: 36rem;
width: 25.9rem;
font-size: smaller;
font-weight: bold;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

span{
  margin-left: 15rem;
}
`



const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width: 25%;
  margin-top: 39rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const CancelButton = styled(Button)`
  background: #FFFFFF;
  color: #F77171;
  border: 4px solid #F77171;
  width: 200px;
  height: 56px;

  &:hover{
    background-color: #ff5a5a;
    color: #FFFFFF;
  }
`;

const ProceedToPayButton = styled(Button)`
  background: #47BA68;
  color: #ffff;
  border: 4px ;
  width: 200px;
  height: 56px;

  &:hover{
    background-color: #6fdd8e;
  }
`;

const PNG = styled.div`
  position: absolute;
  margin-top: 43rem;
  margin-right: 16.6rem;
`





export default Form;
