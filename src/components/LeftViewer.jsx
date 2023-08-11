import React from 'react'
import styled from 'styled-components';
import LocationSearchView from './LocationSearchView';
import  {useImgSelector} from '../hooks/useImgSelector';
import { useDateFormatted } from '../hooks/useDateFormatted';


const Container = styled.div`
  display: inline-block;
  width: 25%;
  min-height: 100vh;
  background: #1E213A;
  position: relative;
  order: 1;
`;

const CloudsContainer = styled.div`
  position: absolute; 
  top: 8.5%;
  left: 0;
  display: block;
  height: 45.5vh;;
  width: 100%;
  background: url('./assets/img/Cloud-background.png') no-repeat center center;
  background-size: 150% 95%;
  opacity: 0.1;
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

const ButtonPlaces = styled.button`
  width: 9rem;
  height: 2.2rem;
  background: #6E707A;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  border: none;

  &:hover {
      background: #55565e;
      cursor: pointer;
    }

    &:active {
        background: #E7E7EB;
        color: #585676;
        cursor: pointer;
    }
  
    &:active span {
        color:#6E707A;
    }
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

    &:hover {
        background: #55565e;
        cursor: pointer;
    }

    &:active {
        background: #E7E7EB;
        color: #585676;
        cursor: pointer;
    }
  
    &:active span {
        font-size: 1.2rem;
        color:#6E707A;
    }

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
  font-size: 100px;
  font-style: normal;
  font-weight: 500; 
`;

const WeatherDegType = styled.span`
  color: #A09FB1;
  font-family: Raleway;
  font-size: 35px;
  font-style: normal;
  font-weight: 500; 
  margin-top:50px;
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
  font-size: 25px;
  font-style: normal;
  font-weight: 600; 
  text-transform: capitalize;
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
  text-transform: capitalize;

`;

const ButtonSearchIcon = styled.span`
  color:#E7E7EB;
  font-size: 1.3rem;
`;

const LocationIcon = styled.span`
  color:#88869D;
  font-size: 1.1rem;
`;



const LeftViewer =({ 
  isSearchOpen, 
  toggleSearchView, 
  temp, 
  descri, 
  city, 
  country, 
  units, 
  handleCityChange, 
  handleGeoLocation
}) => {
 

  const [image] = useImgSelector(descri);
  const date = useDateFormatted();

  const temAdjust = () => {
    if(units){
      return (temp-273.15).toFixed(0);
    }else{
      return ((temp-273.15)*9/5+32).toFixed(0);
    }
  }
  
  const getGeoLocation = () => {
    if(!navigator.geolocation){
      alert('Geolocation is not supported by your browser');
    }else{
      navigator.geolocation.getCurrentPosition((position)=>{
        handleGeoLocation(position);
      });
    }
  }

  return (
    <Container>
      <CloudsContainer/>
      <ButtomsContainer>
        <ButtonPlaces  
          onClick={(e) =>{
                e.preventDefault();
                toggleSearchView();
          }
          }>
          <BtnText >
            Search for places
          </BtnText>
        </ButtonPlaces>
        <ButtonSearch onClick={(e)=> {
          e.preventDefault();
          getGeoLocation();
          }}>
          <ButtonSearchIcon className="material-icons">
            gps_fixed
          </ButtonSearchIcon>        
        </ButtonSearch>
      </ButtomsContainer>
      <WeatherImgContainer>
        <WeatherImg src={image}/>
      </WeatherImgContainer>
      <WeatherContainerInfo>
        <WeatherText>
          <WeatherDeg>
            {temAdjust()}
          </WeatherDeg>
          <WeatherDegType>
            {units?'°C':'°F'}
          </WeatherDegType>
        </WeatherText>
        <WeatherInfo>
          <WeatherInfoText>
          {descri}
          </WeatherInfoText>
        </WeatherInfo>
        <WeatherExtendInfo>
          <WeatherDate>
            Today     •     {date}
          </WeatherDate>
          <WeatherLocation>
            <LocationIcon className="material-icons">
              location_on
            </LocationIcon>
            {city},{' '+country} 
          </WeatherLocation>
      </WeatherExtendInfo>
      </WeatherContainerInfo>
      {isSearchOpen 
        && 
        <LocationSearchView 
          isOpen={isSearchOpen} 
          toggleSearchView={toggleSearchView} 
          handleCityChange={handleCityChange}
          />}
    </Container>
    
  )
}

export default LeftViewer;
