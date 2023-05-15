import React from 'react';
import { FaAdversal, FaBookOpen, FaClock, FaGraduationCap, FaTv } from 'react-icons/fa';
import styled from 'styled-components';

const Text = () => {
    return (
        <Container>
            <StyledText>
                Access curated courses worth <strike>₹ 18500</strike> at just <span>₹ 99</span> per year!
            </StyledText>
            <StyledPara> <FaBookOpen className='react-icons' /><span>100+</span>Job relevant courses</StyledPara>
            <StyledPara> <FaClock className='react-icons' /> <span>20,000+</span>Hours of content</StyledPara>
            <StyledPara> <FaTv className='react-icons' /><span>Exclusive</span> webinar access</StyledPara>
            <StyledPara><FaGraduationCap className='react-icons' />Scholarship worth <span>₹ 94,500</span></StyledPara>
            <StyledPara> <FaAdversal className='react-icons' /> <span>Ad free</span> learning experience</StyledPara>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    width: 50%;
`

const StyledText = styled.h1`
  width: 42rem;
  height: 7rem;
  padding-left: 6rem;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 5;
  font-size: 56px;
  color: #FFFFFF;

  strike {
    text-decoration-color: #FF0000;
  }

  span {
    color: #0096FF;
  }
`;

const StyledPara = styled.p`
  width: 35rem;
  height: 2rem;
  font-family: 'Roboto';
  font-weight: 50;
  font-size: 32px;
  color: #FFFFFF;
  padding: 10px;

  span{
    color: #0096FF;
  }

  .react-icons{
    margin-right: 1.5rem;
    font-size: 38px;
    padding-left: 5.5rem;
  }
`;

export default Text;
