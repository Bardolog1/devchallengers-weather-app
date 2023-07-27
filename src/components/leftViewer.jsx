import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  width: 28.6875rem;
  height: 63.9375rem;
  background: #1E213A;
  position: relative;

`;

const CloudsContainer = styled.div`
  position: absolute; 
  top: 6.44rem;
  left: 0;
  display: block;
  height: 23.5rem;
  width: 100%;
  background: url('./assets/img/Cloud-background.png') no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`;

const ButtomsContainer = styled.div`
  width: 100%;
  height: 6.44rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const WeatherImgContainer = styled.div`
  width: 100%;
  height: 23.5rem;
  //background-color: rgba(255, 255, 255, 0.2);
`;

const ButtonPlaces = styled.div`
  width: 10rem;
  height: 2.5rem;
  background: #6E707A;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
  display: flex;
  justify-content: center;
  align-items: center;

`;


const BtnText = styled.span`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: normal; 
`;


const ButtonSearch = styled.div`
   width: 2.5rem;
   height: 2.5rem;
   border-radius: 50%;
   background: #6E707A;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 

`;



const LeftViewer = () => {
  return (
    <Container>
      <CloudsContainer/>
      <ButtomsContainer>
        <ButtonPlaces><BtnText>Search for places</BtnText></ButtonPlaces>
        <ButtonSearch></ButtonSearch>
      </ButtomsContainer>
      <WeatherImgContainer></WeatherImgContainer>
    </Container>
  )
}

export default LeftViewer;