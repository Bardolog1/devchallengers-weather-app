import React from 'react';
import styled from 'styled-components';
import  { useImgSelector } from '../hooks/useImgSelector';
import { useDateFormatted } from '../hooks/useDateFormatted';


const Container = styled.div`
    width: 15%;
    height: 90%;
    background-color: #1E213A;
    overflow: hidden;

    &._1{
        order: 1;
    }

    &._2{
        order: 2;
    }

    &._3{
        order: 3;
    }

    &._4{
        order: 4;
    }

    &._5{
        order: 5;
    }

    /* Responsive Styles */
    @media (max-width: 480px) {
        width: 35%;
        height: 25%;
       
    }

     //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        width: 20%;
        height: 90%;
    }
`;

const TitleDay = styled.h2`
    font-size: 1rem;
    color: #E7E7EB;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    text-align: center;

     //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
       font-size: 0.8rem;
       margin-top: 0.5rem;
    }
`;

const DayImageContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        height: 45%;
        width: 90%;
    }
`;

const DayImage = styled.img`
    width: 5rem;
    height: 4.6rem;
    background-color: transparent;

     //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
        width: 3rem;
        height: 2.6rem;
    }
`;

const DegreeContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Degree = styled.span`
    font-size: 1.1rem;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;

    &.min{
        color: #E7E7EB;
    }
    
    &.max{
        color: #A09FB1;
    }

    
     //mobile landscape
     @media screen and (max-width: 932px) and (min-width: 730px) and (orientation: landscape) {
       font-size: 0.9rem;
    }

`;


const DayWeatherCard = ({order,  isCelsius, data}) => {
  
    const description = data[0]? data[0].weather[0].description : "No hay datos";
    const [image] = useImgSelector(description?.toLowerCase());   
    const min = data[0]? isCelsius ? (data[0]?.main.temp_min - 273.15)?.toFixed(0) : ((data[0].main.temp_min - 273.15) * 9/5 + 32)?.toFixed(0) : "00";
    const max = data[0]? isCelsius ? (data[data.length- 1]?.main.temp_max - 273.15)?.toFixed(0) : ((data[data.length- 1].main.temp_max - 273.15) * 9/5 + 32)?.toFixed(0) : "00";
    const date =  useDateFormatted(data[0]? data:null, order);
  
    return (
        <Container className={'_'+order}>
            <TitleDay>{date?date:"Some Day"}</TitleDay>
            <DayImageContainer>
                <DayImage src={image} alt={description}/>
            </DayImageContainer>
            <DegreeContainer>
                <Degree className="min">{min}{isCelsius?'°C':'°F'}</Degree>
                <Degree className="max">{max}{isCelsius?'°C':'°F'}</Degree>
            </DegreeContainer>
        </Container>
  )
}

export default DayWeatherCard