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

    /* Responsive Styles */

    //mobile portrait
    @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    }
    //mobile landscape
    @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        width: 65vw;
        height: 100vh;
    }

`;

const ChangeDegreeContainer = styled.div`
    width: 100%;
    height: 10.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    /* Responsive Styles */

    //mobile portrait
    @media (max-width: 480px) {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1000;
        width: auto;
    }
    //mobile landscape
    @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1000;
        width: auto;
    }
`;

const ChangeDegreeButtons = styled.div`
    width: 100%;
    height: 2.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 8rem;

    /* Responsive Styles */

     //mobile portrait
    @media (max-width: 480px) {
        padding-right: 1rem;
        padding-bottom: 2.5rem;
    }
    //mobile landscape
    @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        padding-right: 1rem;
        padding-bottom: 2.5rem;
    }

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

     /* Responsive Styles */

     //mobile portrait
    @media (max-width: 480px) {
        width: 4.3rem;
        height: 4.3rem;
        font-size: 1.5rem;

        &.active {
            display: none;
        }
    }
    //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        width: 3.3rem;
        height: 3.3rem;
        font-size: 1.5rem;

        &.active {
            display: none;
        }
    }


`;

const DailyWeatherContainer = styled.div`
    width: 100%;
    height: 24.8vh;
    position: relative;

    /* Responsive Styles */
    @media (max-width: 480px) {
        height: 100vh;
    }

    
`;

const DailyWeatherCardsContainer = styled.div`
    height: 100%;
    margin: 0 7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    /* Responsive Styles */
    @media (max-width: 480px) {
        height: 100vh;
        padding: 0 1rem;
        margin: 0;
        flex-wrap: wrap;
        justify-content: space-evenly;

    }

    //mobile landscape
    @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        margin: 0 1rem;
        padding: 0;
    }
`;

const CurrentHighlightsContainer = styled.div`
    width: 100%;
    height: 57.7vh;
    position: relative;

    /* Responsive Styles */
    //mobile portrait
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150vh;
        padding: 0 1rem;
    }

    
    

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

    /* Responsive Styles */
    @media (max-width: 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-wrap: nowrap; 
        margin: 0;
        
    }

     //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        margin: 0 1rem;
        padding: 0;
    }
`;

const CurrentHighlightsTitle = styled.div`
    height: 15%;
    margin: 0 7rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    /* Responsive Styles */
    @media (max-width: 480px) {
        width: 100%;
        align-items: center;
        margin: 1rem 2rem;
        padding-left: 2rem;
        height: 8%;
    }

     //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        margin: 0 1rem;
        margin-bottom: 1rem;
        padding: 0;
    }
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

     //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

`;

const FooterContainer = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
       margin-top: 1rem;     
        height: 5vh;
    }
`;

const FooterText = styled.span`
    color: #e7e7eb;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: normal;
    text-align: center;
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
                    return data?.filter((item) => isSomeDay(item.dt_txt,1));
               case 2:
                    return data?.filter((item) => isSomeDay(item.dt_txt,2));
               case 3:
                    return data?.filter((item) => isSomeDay(item.dt_txt,3));
                case 4:
                    return data?.filter((item) => isSomeDay(item.dt_txt,4));
                case 5:
                    return data?.filter((item) => isSomeDay(item.dt_txt,5));
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
                    onClick={(e) =>{
                        e.preventDefault();
                        handleDegreeChange()
                    }
                    }
                >
                    <span>°</span>C
                </ChangeDegreeButton>
                <ChangeDegreeButton
                    className={degree ? '' : 'active'}
                    onClick={(e) =>{
                        e.preventDefault();
                        handleDegreeChange()
                    }
                    }
                >
                    <span>°</span>F
                </ChangeDegreeButton>
            </ChangeDegreeButtons>
        </ChangeDegreeContainer>
        <DailyWeatherContainer>
            <DailyWeatherCardsContainer>
                <DayWeatherCard 
                    order='1' 
                    data={dispatcherData(daylyData?daylyData:null,1)}
                    isCelsius={isCelsius}
                ></DayWeatherCard>
                <DayWeatherCard 
                    order='2' 
                    isCelsius={isCelsius}
                    data={dispatcherData(daylyData?daylyData:null,2)}
                >
                </DayWeatherCard>
                <DayWeatherCard 
                    order='3'
                    isCelsius={isCelsius}
                    data={dispatcherData(daylyData?daylyData:null,3)}
                >
                </DayWeatherCard>
                <DayWeatherCard 
                    order='4'
                    isCelsius={isCelsius}
                    data={dispatcherData(daylyData?daylyData:null,4)}
                >
                </DayWeatherCard>
                <DayWeatherCard 
                    order='5'
                    isCelsius={isCelsius}
                    data={dispatcherData(daylyData?daylyData:null,5)}
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