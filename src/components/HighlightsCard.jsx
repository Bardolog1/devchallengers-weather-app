import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';


const Container = styled.div`
    width: 45%;
    height: 50%;
    background-color: #1E213A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &.secundary{
        height: 40%;
        margin-top: 2rem;

    }

`;

const Title = styled.h2`
    font-size: 1rem;
    color: #E7E7EB;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
`;

const DataContainer = styled.div`
    width: 100%;
    height: 40%;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    `;

const Data = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

`;    

const DataValue = styled.h3`
    font-size: 3.5rem;
    color: #E7E7EB;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    
    
`;

const DataUnit = styled.span`
    font-size: 1.5rem;
    color: #E7E7EB;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    margin-top: 2rem;

`;

const DataVisual = styled.div`
    width: 100%;
    height: 20%;
    background-color: transparent;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;

const WindVisualContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;

const WindVisual = styled.div`
    margin-top: 1rem;
    width: 2rem;
    height: 2rem;
    background: #A09FB1;
    border-radius: 50%;
    font-size: 1rem;
    color: white;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const DirectionIcon = styled.span`
  color:white;
  font-size: 1.1rem;
  transform: rotate(${props => props.deg}deg);
  transition: transform 0.5s ease-in-out;
`;

const WindDirection = styled.span`
    font-size: 1.2rem;
    font-family: sans-serif;
    margin: 0;
    color: #E7E7EB;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    margin-left: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;


const HighlightsCard = ({type, title, value, unit, degreeWind}) => {

    const getWindDirection = () => {
        const directions = [
          'N', 'NNE', 'NE', 'ENE',
          'E', 'ESE', 'SE', 'SSE',
          'S', 'SSW', 'SW', 'WSW',
          'W', 'WNW', 'NW', 'NNW'
        ];
      
        const adjustedDegrees = (degreeWind % 360 + 360) % 360;
        const sector = Math.floor((adjustedDegrees - 11.25) / 22.5);
        const windDirection = directions[sector];
      
        return windDirection;
      };


    const getDataVisual = () => {
        return(
            <DataVisual>
                {title === "Humidity" && <ProgressBar progress={value} />}
                {title === "Wind status" && <WindVisualContainer>
                                                <WindVisual>
                                                    <DirectionIcon className="material-icons" deg={degreeWind}>navigation</DirectionIcon>   
                                                </WindVisual> 
                                                <WindDirection>{getWindDirection()}</WindDirection>
                                            </WindVisualContainer>}   
            </DataVisual>
        )
    }

  return (
    <Container className={type}>
        <Title>{title}</Title>
        <DataContainer>
            <Data>
                <DataValue>{value}</DataValue><DataUnit>{unit}</DataUnit>
            </Data>
        </DataContainer> 
        {type !== "secundary" && getDataVisual()}
    </Container>
  )
}

export default HighlightsCard