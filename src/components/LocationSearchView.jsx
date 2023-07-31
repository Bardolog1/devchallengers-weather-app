import React from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/UseFetch";
import { useState, useEffect } from "react";
import cityData from '../data/city.list.min.json';

const Container = styled.div`
  display: inline-block;
  width: 25%;
  max-height: 100vh;
  background: #1e213a;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 20vh;
  position: relative;
`;

const CloseSection = styled.div`
  width: 100%;
  height: 5vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchSection = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const SearchForm = styled.form`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.div`
  color: #e7e7eb;
  font-family: "Raleway", sans-serif;
  line-height: normal;
  font-size: 20px;
  width: 20px;
  height: 60%;
  margin-right: 30px;
  margin-top: 10px;
`;

const SearchFieldIcon = styled.div`
  width: 60%;
  height: 40%;
  position: relative;
  border: 1px solid #e7e7eb;
  display: flex;
  justify-content: end;
`;

const SearchIcon = styled.span`
  color: #88869d;
  font-size: 30px;
  width: 1.3rem;
  height: 1.3rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  margin: 0.5rem;
`;

const SearchField = styled.input`
  width: 80%;
  height: 95%;
  background-color: #1e213a;
  border: none;
  text-align: left;
  font-size: 16px;
  color: #e7e7eb;
  font-family: "Raleway", sans-serif;
  position: relative;

  &:focus {
    outline: none;
    border: none;
  }
`;

const SearchButton = styled.button`
  width: 20%;
  height: 40%;
  background-color: #3c47e9;
  border: none;
  color: #e7e7eb;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
`;

const ResultsContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Results = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  overflow: scroll;
  background-color: #1e213a;
`;

const ListResults = styled.ul`
  width: 100%;

  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const NotFound = styled.span`
    width: 70%;
    height: 0.8rem;
    color: rgba(255,0,0,0.5);
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin: 0.5rem;
    padding: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    text-transform: capitalize;
`;

const ListItem = styled.li`
  width: 70%;
  height: 0.8rem;
  color: #e7e7eb;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: normal;
  margin: 0.5rem;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  text-transform: capitalize;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    border: 1px solid transparent;
    transition: border 0.2s;
  }

  &::after {
    content: "";
    width: 10%;
    height: 25%;
    color: #88869d;
    font-size: 18px;
    position: absolute;
    top: 35.5%;
    right: 0;
    justify-content: flex-end;
    align-items: center;
    z-index: 10;
    transition: content 0.2s;
  }

  &:hover::after {
    cursor: pointer;
    content: ">";
  }

  &:hover::before {
    cursor: pointer;
    border: 1px solid #e7e7eb;
  }
`;

const CitiesGetter = (search, data) => {
  const dataFormated = data?.map((city) => {
    let cityFormated = city.name.toLowerCase();
    cityFormated = cityFormated.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return { ...city, name: cityFormated };
  });

  return dataFormated.filter((city) =>
    city.name.includes(search.toLowerCase())
  );
};


const LocationSearchView = () => {
  /*const { data } = useFetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities"
  );*/

  const [data, setData] = useState(cityData);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  return (
    <Container>
      <SearchContainer>
        <CloseSection>
          <CloseButton>X</CloseButton>
        </CloseSection>
        <SearchSection>
          <SearchForm
            onSubmit={(e) => {
              e.preventDefault();
              setResults(CitiesGetter(search, data));
            }}
          >
            <SearchFieldIcon> 
              <SearchIcon className="material-icons">search</SearchIcon>
              <SearchField
                type="text"
                placeholder="search location"
                name="search"
                autoComplete="off"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </SearchFieldIcon>
            <SearchButton type="submit">Search</SearchButton>
          </SearchForm>
        </SearchSection>
      </SearchContainer>
      <ResultsContainer>
        <Results>
          <ListResults>
            {results.length > 0 ? (
              results.map((city) => (
                <ListItem key={city.id}>{city.name}</ListItem>
              ))
            ) : (
              <NotFound>Not Found Locations!</NotFound>
            )}
          </ListResults>
        </Results>
      </ResultsContainer>
    </Container>
  );
};

/*onSubmit={e=>{
                        e.preventDefault();
                        setSearch(e.target.search.value);
                        console.log(search);
                    }} */

export default LocationSearchView;
