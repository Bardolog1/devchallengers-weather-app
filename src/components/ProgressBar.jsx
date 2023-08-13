import React from 'react';
import styled, { keyframes } from 'styled-components';



const progressAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${props => props.progress}%;
  }
`;

const ProgressBarFill = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background-color: #4caf50;
  transition: width 3s ease-in-out;
  `;

const ProgressBarContainer = styled.div`
  margin-top: 1rem;
  width: 70%;
  height: 0.4rem;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;

  &:hover > div{
    cursor: pointer;
    animation: ${progressAnimation} 3s ease-in-out infinite;
    transition: width 3s ease-in-out;
  }

   //mobile landscape
   @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
    height: 6px;
    & > span {
      display: none;
    }
}
`;

const Number = styled.span`
    font-size: 0.8rem;
    font-family: sans-serif;
    margin: 0;
    color: #E7E7EB;
    font-weight: 500;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    position: absolute;

    &.left {
        left: 13%;
        top: -0.3rem;
    }

    &.right {
        left: 78%;
        top: -0.3rem;
    }

    &.center {
        left: 48%;
        top: -0.3rem;
    }

    &.porcent{
        left: 80%;
    }

`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFill progress={progress} />
        <Number className="left">0</Number>
        <Number className="center">50</Number>
        <Number className="right">100</Number>
        <Number className="porcent">%</Number>
    </ProgressBarContainer>
  );
};

export default ProgressBar;