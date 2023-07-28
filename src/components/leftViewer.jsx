import React from 'react'
import styled from 'styled-components';
//import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const Container = styled.div`
  display: inline-block;
  width: 25%;
  min-height: 100vh;
  background: #1E213A;
  position: relative;
`;

const CloudsContainer = styled.div`
  position: absolute; 
  top: 8.5%;
  left: 0;
  display: block;
  height: 45.5vh;;
  width: 100%;
  background: url('./assets/img/Cloud-background.png') no-repeat center center;
  background-size: 160% 85%;
  opacity: 0.27;
`;

const ButtomsContainer = styled.div`
  width: 100%;
  height: 15.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeatherImgContainer = styled.div`
  width: 100%;
  height: 34.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonPlaces = styled.div`
  width: 9rem;
  height: 2.2rem;
  background: #6E707A;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`;


const BtnText = styled.span`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: normal; 
  
`;


const ButtonSearch = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: #6E707A;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;



const WeatherImg = styled.img`
  width: 40%;
`;

const WeatherContainerInfo = styled.div`
  width: 100%;
  height: 50vh;
`;

const WeatherText = styled.div`
  width: 100%;
  height: 24vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherDeg = styled.span`
  color: #E7E7EB;
  font-family: Raleway;
  font-size: 134px;
  font-style: normal;
  font-weight: 500; 
`;

const WeatherDegType = styled.span`
  color: #A09FB1;
  font-family: Raleway;
  font-size: 38px;
  font-style: normal;
  font-weight: 500; 
`;

const WeatherInfo = styled.div`
  width: 100%;
  height: 13.8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherInfoText = styled.span`
  color: #A09FB1;
  text-align: center;
  font-family: Raleway;
  font-size: 26px;
  font-style: normal;
  font-weight: 600; 
`;

const WeatherExtendInfo = styled.div`
  width: 100%;
  height: 12vh;
`;

const WeatherDate = styled.span`
  color: #88869D;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal; 
  display: flex ;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6vh;
`;



const WeatherLocation = styled.span`
  color: #88869D;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal; 
  display: flex ;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6vh;
`;

const ButtonSearchIcon = styled.span`
  color:#E7E7EB;
  font-size: 1.3rem;
`;

const LocationIcon = styled.span`
  color:#88869D;
  font-size: 1.1rem;
`;


const LeftViewer = () => {
  return (
    <Container>

      <CloudsContainer/>

      <ButtomsContainer>
        <ButtonPlaces>
          <BtnText>
            Search for places
          </BtnText>
        </ButtonPlaces>
        <ButtonSearch>
          <ButtonSearchIcon className="material-icons">
            gps_fixed
          </ButtonSearchIcon>        
        </ButtonSearch>
      </ButtomsContainer>

      <WeatherImgContainer>
        <WeatherImg src="./assets/img/Shower.png"/>
      </WeatherImgContainer>

      <WeatherContainerInfo>

        <WeatherText>
          <WeatherDeg>
            15
          </WeatherDeg>
          <WeatherDegType>
            °C
          </WeatherDegType>
        </WeatherText>

        <WeatherInfo>
          <WeatherInfoText>
            Shower
          </WeatherInfoText>
        </WeatherInfo>

        <WeatherExtendInfo>
          <WeatherDate>
            Today    •    Fri, 5 Jun
          </WeatherDate>
          <WeatherLocation>
            <LocationIcon className="material-icons">
              location_on
            </LocationIcon>
            Bogotá, Colombia
          </WeatherLocation>
      </WeatherExtendInfo>

      </WeatherContainerInfo>

    </Container>
  )
}

export default LeftViewer;