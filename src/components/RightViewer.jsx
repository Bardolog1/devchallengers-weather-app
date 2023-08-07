import React from 'react';
import styled from 'styled-components';
import DayWeatherCard from './DayWeatherCard';
import HighlightsCard from './HighlightsCard';

const Container = styled.div`
    width: 75%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 2;
    position: relative;
`;

const ChangeDegreeContainer = styled.div`
    width: 100%;
    height: 10.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
   // background-color: rgba(250, 0, 0, 0.2);
`;

const ChangeDegreeButtons = styled.div`
    width: 100%;
    height: 2.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    //margin-right: 17rem;
    //margin-left: 8rem;
    padding-right: 8rem;

`;

const ChangeDegreeButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    background: #585676;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 50%;
    font-size: 1rem;
    color: white;
    font-weight: 700; 
    font-family: 'Raleway', sans-serif;
    margin-left: 1rem;
   

    &:hover {
        background: #6E707A;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    &.active {
        background: #E7E7EB;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: #585676;
        cursor: pointer;
    }

    &.active:hover {
        background: #6E707A;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        color: white;
    }


    & span {
        font-size: 1.2rem;
        font-family: sans-serif;
        margin: 0;

    }


`;

const DailyWeatherContainer = styled.div`
    width: 100%;
    height: 24.8vh;
    position: relative;
`;

const DailyWeatherCardsContainer = styled.div`
    height: 100%;
    margin: 0 7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const CurrentHighlightsContainer = styled.div`
    width: 100%;
    height: 57.7vh;
    position: relative;
`;

const CurrentHighlightsCardsContainer = styled.div`
    height: 80%;
    margin: 0 7rem;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const CurrentHighlightsTitle = styled.div`
    height: 15%;
    margin: 0 7rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const CurrentHighlightsTitleText = styled.span`
    color: #e7e7eb;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: normal;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

`;

const FooterContainer = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterText = styled.span`
    color: #e7e7eb;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: normal;
`;

const UserLink = styled.a`
    color: #e7e7eb;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: normal;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

`;



const RightViewer = ({
    daylyData, 
    handleDegreeChange,
    degree, 
    isCelsius,
    wind,
    humidity,
    visibility,
    pressure,
    degreeWind
    
    }) => {
   
    const isSomeDay = (dateString,lastDay) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + lastDay);
        return dateString.includes(getDateString(tomorrow));
      };

      const getDateString = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };  


    const dispatcherData = (data, card)=>{
       switch (card) {
              case 1:
                    return data.filter((item) => isSomeDay(item.dt_txt,1));
               case 2:
                    return data.filter((item) => isSomeDay(item.dt_txt,2));
               case 3:
                    return data.filter((item) => isSomeDay(item.dt_txt,3));
                case 4:
                    return data.filter((item) => isSomeDay(item.dt_txt,4));
                case 5:
                    return data.filter((item) => isSomeDay(item.dt_txt,5));
                default:
                    return null;              
       }
        
     }
   
    return (
    <Container>
        <ChangeDegreeContainer>
            <ChangeDegreeButtons>
                <ChangeDegreeButton
                    className={degree ? 'active' : ''}
                    onClick={handleDegreeChange}
                >
                    <span>°</span>C
                </ChangeDegreeButton>
                <ChangeDegreeButton
                    className={degree ? '' : 'active'}
                    onClick={handleDegreeChange}
                >
                    <span>°</span>F
                </ChangeDegreeButton>
            </ChangeDegreeButtons>
        </ChangeDegreeContainer>
        <DailyWeatherContainer>
            <DailyWeatherCardsContainer>
                <DayWeatherCard 
                    order='1' 
                    data={dispatcherData(daylyData,1)}
                    isCelsius={isCelsius}
                ></DayWeatherCard>
                <DayWeatherCard 
                    order='2' 
                    isCelsius={isCelsius}
                    data={dispatcherData(daylyData,2)}
                >
                </DayWeatherCard>
                <DayWeatherCard 
                    order='3'
                    isCelsius={isCelsius}
                    data={dispatcherData(daylyData,3)}
                >
                </DayWeatherCard>
                <DayWeatherCard 
                    order='4'
                    isCelsius={isCelsius}
                    data={dispatcherData(daylyData,4)}
                >
                </DayWeatherCard>
                <DayWeatherCard 
                    order='5'
                    isCelsius={isCelsius}
                    data={dispatcherData(daylyData,5)}
                >
                </DayWeatherCard>
            </DailyWeatherCardsContainer>
        </DailyWeatherContainer>
        <CurrentHighlightsContainer>
            <CurrentHighlightsTitle>
                <CurrentHighlightsTitleText>
                    Today's Highlights
                </CurrentHighlightsTitleText>
            </CurrentHighlightsTitle>
            <CurrentHighlightsCardsContainer>
                <HighlightsCard 
                    title="Wind status" 
                    unit="Km/h" value={wind} 
                    degreeWind={degreeWind}
                ></HighlightsCard>
                <HighlightsCard 
                    title="Humidity" 
                    unit="%" 
                    value={humidity}
                ></HighlightsCard>
                <HighlightsCard 
                    title="Visibility" 
                    unit="Km" 
                    type="secundary" 
                    value={visibility}
                ></HighlightsCard>
                <HighlightsCard 
                    title="Air Pressure" 
                    unit="hPa" 
                    type="secundary" 
                    value={pressure}
                ></HighlightsCard>
            </CurrentHighlightsCardsContainer>
        </CurrentHighlightsContainer>
        <FooterContainer>
            <FooterText>created by 
                <UserLink href="https://github.com/Bardolog1"
                    target="_blank"
                    rel="noopener noreferrer"
                >Libardo Lozano</UserLink> 
                - devChallenges.io
            </FooterText>
        </FooterContainer>
    </Container>
  )
}

export default RightViewer